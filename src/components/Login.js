import SignUp from "./Signup";

export default function Login(){
    const submit =(e)=>{
     e.preventDefault();
     console.log('make an API call')
    }
    return <div>
        <h2>Login Form</h2>
        <form onSubmit={submit}>
            <div>
            <label>Username:
                <input name="username" type="text" defaultValue=""/>
            </label>
            </div>
            <div>
            <label>Password:
                <input name="password" type="password" defaultValue=""/>
            </label>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div><p>Don't have an account?</p></div>
            <div><p>Create New</p></div>
        </form>
        <SignUp/>
    </div>
}