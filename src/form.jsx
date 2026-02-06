import { useState } from "react";

function Form({ addUser }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({ ...errors, [name]: "" });
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

    if (!form.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setSuccess("");
      return;
    }

    // send data to parent (App)
    addUser({
      firstName: form.firstname,
      lastName: form.lastname,
      email: form.email,
    });

    // reset form
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      terms: false,
    });

    setErrors({});
    setSuccess("Registration successful!");
  };

  return (
    <div className="container my-5">
      <h2>Registration Form</h2>

      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              name="firstname"
              className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
              value={form.firstname}
              onChange={handleChange}
              placeholder="First Name"
            />
            <div className="invalid-feedback">{errors.firstname}</div>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="lastname"
              className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
              value={form.lastname}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <div className="invalid-feedback">{errors.lastname}</div>
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="terms"
            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
            checked={form.terms}
            onChange={handleChange}
          />
          <label className="form-check-label">
            I agree to the terms and conditions
          </label>
          <div className="invalid-feedback">{errors.terms}</div>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
