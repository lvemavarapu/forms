import React, { useState } from "react";
import "./style.css";

export default function App() {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Email*</label>
                    <input
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={handleInputChange}
                        required="*"
                    />
                </div>
                <div className="form-control">
                    <label>Password*</label>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                        required="*"
                    />
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
