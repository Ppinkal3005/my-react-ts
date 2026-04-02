import HeaderComponent from "../../components/header/header.component";
import "./contact.page.css";

function ContactPage() {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <div className="card">
                    <form className="contact-form">
                        <h1>Contact Page</h1>
                        <label className="label">Name</label>
                        <input className="input" type="text" /><br></br>
                        <label className="label">Email</label>
                        <input className="input" type="email" /><br></br>
                        <label className="label">Message</label>
                        <textarea className="input"></textarea><br></br>
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default ContactPage;