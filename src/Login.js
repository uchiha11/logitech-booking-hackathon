import React, { useState } from "react";
import App from "./App";
import Gesture from "./components/Gesture";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { InputLabel } from '@material-ui/core';
import "./css/Login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        let testObject = {email}
        localStorage.setItem('testObject', JSON.stringify(testObject));
        return (email.length > 0 && password.length > 0)

    }
    function handleSubmit(event) {
       if((email ==="user@logitech.com" && password ==="user123")
        || (email ==="logi@logitech.com" && password ==="logi123"))
       {
           event.preventDefault();
           ReactDOM.render(<App/>, document.querySelector("#root"))
       }
       else alert('incorrect email or password') ;

    }
    function openInteractivePage() {
        ReactDOM.render(<Gesture/>, document.querySelector("#root"))
    }
    return (
<div className="mainLogin"> <div className="loginTitle">Logitech</div>
    <div className="description">please enter your login credentials to continue</div>
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <InputLabel style={{color:'white', fontSize:'23px'}}>Email</InputLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <InputLabel  style={{color:'white', fontSize:'23px'}}>Password</InputLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>

        </div>
    {/*This action must execute the file recog.py*/}
    {/*<form action="/api" method="post" style={{display:"flex", "justifyContent":"center"}}><Button className="recognition" onClick={openInteractivePage} type="submit">Recognition</Button></form>*/}
   <div style={{display:"flex", "justifyContent":"center"}} ><Button variant="secondary" style={{backgroundColor:"#dc3545", borderColor:"#dc3545"}} className="recognition" onClick={openInteractivePage} type="submit">Logi</Button></div>
</div>

)
};

export default Login

