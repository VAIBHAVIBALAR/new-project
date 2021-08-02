import React,{useState} from 'react'
import axios from "axios";
export default function SignUp(){
    const [user, setUser] = useState({ username:"", password:""})
    const[error, setError] =useState({messageU:"", messageP:""})
    
    const getUser = () =>{
        axios.post('https://ft-potluck-planner-backend.herokuapp.com/api/auth/register', user)
        .then(res =>{
            console.log(res.data)
        })
    }
    function Validate() {
        let isValid = true;
        setError({messageU: "", messageP: ""})
        if (user.username.length < 3){
            isValid = false;
            setError(prevError =>{return {...prevError, messageU: 'username must be more than 3 characters long'}})
        }
        if(user.password.length < 5){
            isValid = false;
            setError(prevError =>{return {...prevError, messageP: 'Password must be more than 5 characters long'}})
        }
        return isValid;
    }
    
    const submit = (e) =>{
        let isValidRValue = Validate();
        e.preventDefault();
        if(isValidRValue == true ){
            getUser();
        }
    }

    const inputChangeHandler =(e)=>{
        if(e.target.name == "username" || e.target.name == "password"){
            setUser(prevUser =>{return {...prevUser, [e.target.name]: e.target.value}})
        }
    }
    return<div>
        <form onSubmit={submit}>
            <div>
                <label>Create Username:
                    <input name="username" type="text" defaultValue="" onChange={inputChangeHandler}/>
                </label>
                <div>{error.messageU}</div>
            </div>
            <div>
                <label>Create Password:
                    <input name="password" type="password" defaultValue="" onChange={inputChangeHandler}/>
                </label>
                <div>{error.messageP}</div>
            </div>
            <div>
                <button>Create account</button>
            </div>
        </form>
    </div>
}