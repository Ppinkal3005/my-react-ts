import HeaderComponent from "../../components/header/header.component";
import "./home.page.css";
import { useState } from "react";

type User = {
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

const HomePage2 = () => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        mobile: "",
        gender: "",
    });

    const [users, setUsers] = useState<User[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [editIndex, setEditIndex] = useState<number | null>(null);


    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const validate = () => {
        let err: any = {};

        if (!user.name) err.name = "Name required";
        if (!user.email) err.email = "Email required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            err.email = "Email is not valid";
        }
        if (!user.password) err.password = "Password required";
        else if (user.password.length < 6) {
            err.password = "Password must be at least 6 characters";
        }
        if (!user.mobile) err.mobile = "Mobile required";
        else if (!/^\d{10}$/.test(user.mobile)) {
            err.mobile = "Mobile number must be 10 digits";
        }
        if (!user.gender) err.gender = "Gender required";

        setErrors(err);
        return Object.keys(err).length === 0;
    };


    const addUser = (e: any) => {
        e.preventDefault();

        if (!validate()) return;

        if (editIndex !== null) {
            const updated = [...users];
            updated[editIndex] = user;
            setUsers(updated);
            setEditIndex(null);
        } else {
            setUsers([...users, user]);
        }

        clearForm();
    };

    const editUser = (index: number) => {
        setUser(users[index]);
        setEditIndex(index);
    };

    const updateUser = () => {
        if (validate()) {
            const updatedUsers = [...users];//older user
            updatedUsers[editIndex!] = user;
            setUsers(updatedUsers);
            setEditIndex(null);
            clearForm();
        }
    };

    const cancelUser = () => {
        setEditIndex(null);
        clearForm();
    };

    const deleteUser = (index: number) => {
        const confirmDelete = window.confirm("Delete user?");
        if (confirmDelete) {
            setUsers(users.filter((_, i) => i !== index));
        }
    };


    const clearForm = () => {
        setUser({
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

                <div className="dem">
                    <form onSubmit={addUser}>
                        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
                        <p className="error">{errors.name}</p>

                        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                        <p className="error">{errors.email}</p>

                        <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} />
                        <p className="error">{errors.password}</p>

                        <input name="mobile" placeholder="Mobile" value={user.mobile} onChange={handleChange} />
                        <p className="error">{errors.mobile}</p>

                        <select name="gender" value={user.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <p className="error">{errors.gender}</p>

                        {editIndex !== null ? (
                            <div className="button-group">
                                <button type="button" onClick={updateUser}>Update</button>
                                <button type="button" onClick={cancelUser}>Cancel</button>
                            </div>
                        ) : (
                            <button type="submit">Add</button>
                        )}

                    </form>
                </div>

                <table border={1}>
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
        </>
    );
};

export default HomePage2;