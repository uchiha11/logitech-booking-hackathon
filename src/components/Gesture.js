import React from "react"
import { Button, FormGroup} from "react-bootstrap";
import { InputLabel } from '@material-ui/core';
import '../css/Login.css'


const Gesture = () => {
    function handleSubmit() {
        console.log("execute python script")
    }
    return (
        <div className="container-image"> <div className="loginTitle">Logitech</div>
            <div className="description">Do you want to visit logitech's other sites in the most interactive way !!</div>
            <div className="Login">
                <p style={{display:"flex", "justifyContent":"center"}}>Based on the number of fingers you are holding it will open the respective sites</p>
                <form>
                    <FormGroup controlId="websites">
                        <InputLabel style={{color:'white', fontSize:'15px'}}>1.GMAIL</InputLabel>
                        <InputLabel style={{color:'white', fontSize:'15px'}}>2.WORKDAY</InputLabel>
                        <InputLabel style={{color:'white', fontSize:'15px'}}>3.GHUB</InputLabel>
                        <InputLabel style={{color:'white', fontSize:'15px'}}>4.LOGITECH</InputLabel>
                        <InputLabel style={{color:'white', fontSize:'15px'}}>5.ULTIMATE EARS</InputLabel>
                    </FormGroup>
                    {/*This action must execute the file recog.py*/}
             <Button className="recognition">Start Recognition</Button>
                </form>

            </div>

        </div>
    )
}

export default Gesture
