import axios from "axios";
export default function SignUp(){
    let newValue = { username:"", password:""}
    const submit = (e) =>{
        e.preventDefault();
       // https://ft-potluck-planner-backend.herokuapp.com/api/auth/register
    }
    const inputChangeHandler =(e)=>{
        if(e.target.name == "username" || e.target.name == "password"){
            newValue[e.target.name] = e.target.value
        }
    }

    return<div>
        <form onSubmit={submit}>
            <div>
        <label>Create Username:
                <input name="username" type="text" defaultValue="" onChange={inputChangeHandler}/>
            </label>
            </div>
            <div>
            <label>Create Password:
                <input name="password" type="password" defaultValue="" onChange={inputChangeHandler}/>
            </label>
            </div>
            <div>
                <button>Create account</button>
            </div>
        </form>
    </div>
}