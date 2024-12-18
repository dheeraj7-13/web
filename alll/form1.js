SOURCE CODE:


 import React, { useState } from 'react';
 function Form1() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = (data) => {
        const errors = {};
        if (!data.username.trim()) {
            errors.username = "Username is required";
        } else if (data.username.length < 4) {
            errors.username = "Username must be at least 4 characters long";
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email must be a valid email address';
        }
        if (!data.password) {
            errors.password = "Password is required";
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully");
            // You can also handle form submission here (e.g., send data to an API)
        } else {
            alert("Submission failed due to errors");
        }
    };
    return (
        <div>
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p >{errors.password}</p>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p style={{ color: 
'red' }}>{errors.confirmPassword}</p>}
                    <br />
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
 }
 export default Form1;



 App.js:
 import logo from './logo.svg';
 import './App.css';
 import Form  from './components/Form';
 import Form1  from './components/Form1';
 import './App.css';
 function App() {
  return (
    <div className="App">
      {/* <Greet>  </Greet> */}
      {/* <Form></Form> */}
      <Form1/>
</div>
 );
 }
 export default App;