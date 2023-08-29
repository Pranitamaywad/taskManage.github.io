import { useState } from 'react';
import './loginSignuo.css';
import {useNavigate} from "react-router-dom";
import validation from "./validation";



const LoginSignup =()=>{
    const[enteredName, setEnteredName]= useState('');
    const[enteredEmail,setEnteredEmail] = useState('');
    const[ enteredPass, setEnteredPass] = useState('');

    const nameChangeHandler =(e)=>{
        setEnteredName(e.target.value);
        setValues({...values, [e.target.name]: e.target.value})

    };
    const emailChangeHandler =(e)=>{
        setEnteredEmail(e.target.value);
    

    };
    const passChangeHandler=(e)=>{
        setEnteredPass(e.target.value);
        setValues({...values, [e.target.name]: e.target.value})

    }
    const[action,setAction]= useState("Sign Up");
    const navigate = useNavigate();
    const[values, setValues] = useState(
        {
        name:'',
        password:""
    })
    const [errors, setError] = useState({})
    
    const SignClickHandler =(e)=>{
        const error = validation(values);
        
        setEnteredEmail("");
        setEnteredName("");
        setEnteredPass('');

       setError(error);
       if(!errors) {
        setAction("Sign Up");
       }else {
        setAction("Login");
       }         
    };
    const loginClickHandler = () =>{
        navigate("/Home")
    };

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>            
            </div>
            <div className="inputs">
                { action==="Login"
                ? <div></div>
                : <div className="input">
                    <img src="user.jpg"alt='not found'/>
                    <input type="text" placeholder="name" onChange={nameChangeHandler}/>
                    {errors.name && <p style={{color:"red", fontSize:"11px"}}> {errors.name} </p>}
                </div>
                 }
                <div className="input">
                    <img src="mail.png" alt='not found'/>
                    <input type="email" placeholder="Email Id" onChange={emailChangeHandler}/>
                </div>
                <div className="input">
                    <img src="pass.jpg" alt='not found'/>
                    <input type="password" placeholder="Password" onChange={passChangeHandler}/>
                    {errors.password && <p style={{color:"red", fontSize:"13px"}}> {errors.password} </p>}
                </div>
            </div>
            {action==="Sign Up"?<div></div>:
            <div className="forgot-password">Lost password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <button className={action==="Login"?"submit-gray":"submit"} onClick={SignClickHandler}>Sign Up</button>
                <button className={action==="Sign Up"? "submit-gray":"submit"} onClick={loginClickHandler}>Login</button>

            </div>
        </div>
    )
}
export default LoginSignup;