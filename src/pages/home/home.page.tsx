//useState:store data like variable that update UL

import { useState } from "react";
import HeaderComponent from "../../components/header/header.component";
import "./home.page.css";

//homepage:functional components
//number : index of user in array

type FormData = {
    name: string;
    email: string;
    password: string;
    mobile: string;
    gender: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    password?: string;
    mobile?: string;
    gender?: string;
};

const HomePage = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: "abc",
        email: "abc@gmail.com",
        password: "Abc@123",
        mobile: "1234567890",
        gender: "Male",
    });
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        let tempErrors: FormErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Name is required";

        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            tempErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.mobile) {
            tempErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            tempErrors.mobile = "Mobile number must be 10 digits";
        }

        if (!formData.gender) tempErrors.gender = "Gender is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Add User
    const addUser = (e: any) => {
        e.preventDefault();
        if (validate()) {
            const newUser = formData;
            setUsers([...users, newUser]);//add at end(newUser)
            clearForm();
        }
    };

    //Cancel User
    const cancelUser = () => {
        setEditIndex(null);
        clearForm();
    };
    // Edit User
    const editUser = (index: number) => {
        const u = users[index];
        setFormData(u);
        setEditIndex(index);
    };

    // Update User
    const updateUser = () => {
        if (validate()) {
            const updatedUsers = [...users];
            updatedUsers[editIndex!] = formData;
            setUsers(updatedUsers);
            setEditIndex(null);
            clearForm();
        }
    };

    const fnChangeForm = (e: any) => {
        e.preventDefault();
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
        console.log(formData);
    };

    // Delete User
    const deleteUser = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");

        if (confirmDelete) {
            const updatedUsers = users.filter((_, i) => i !== index);
            setUsers(updatedUsers);
        }
    };

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
            mobile: "",
            gender: "",
        });
        setErrors({});
    };


    return (

        <>
            <HeaderComponent />

            <div className="container">
                <h2>User Dashboard</h2>
                <form onSubmit={addUser}>
                    <div className="input-group">
                        <input type="text" placeholder="Name" value={formData.name} onChange={fnChangeForm} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" value={formData.email} onChange={fnChangeForm} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" value={formData.password} onChange={fnChangeForm} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="input-group">
                        <input type="number" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                    </div>
                    <div className="input-group">
                        <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                    </div>

                    {editIndex !== null ? (
                        <div className="button-group">
                            <button type="button" onClick={updateUser}>Update</button>
                            <button type="button" onClick={cancelUser}>Cancel</button>
                        </div>
                    ) : (
                        <button type="submit">Add</button>
                    )}
                </form>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((u, i) => (
                                <tr key={i}>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.password}</td>
                                    <td>{u.mobile}</td>
                                    <td>{u.gender}</td>
                                    <td>
                                        <button onClick={() => editUser(i)}>Edit</button>
                                        <button onClick={() => deleteUser(i)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};



export default HomePage;