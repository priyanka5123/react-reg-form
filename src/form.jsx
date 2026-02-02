import { useState } from "react";
function Form(){
    const [form, setForm] = useState({ firstname: "",lastname: "",email: "", password:""})
    const [errors,  setErrors] = useState({})
    const handleChange =(e) => {
        const {name,value} =e.target;
        setForm({...form,[name]:value});
        setErrors({...errors, [name]:""});
    };
    const validate = () => {
        let newErrors = {};

        if (!form.firstname.trim()) {
        newErrors.firstname = "First name is required";
        }

        if (!form.lastname.trim()) {
        newErrors.lastname = "Last name is required";
        }

        if (!form.email.trim()) {
        newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = "Email is invalid";
        }

        if (!form.password.trim()) {
        newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(form);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="First Name"
            />

            <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Last Name"
            />

            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;