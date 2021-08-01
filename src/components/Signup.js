export default function SignUp(){
    const submit = (e) =>{
        e.preventDefault();
        console.log('account created')
    }
    return<div>
        <form onSubmit={submit}>
            <div>
        <label>Create Username:
                <input name="username" type="text" defaultValue=""/>
            </label>
            </div>
            <div>
            <label>Create Password:
                <input name="password" type="password" defaultValue=""/>
            </label>
            </div>
            <div>
                <button>Create account</button>
            </div>
        </form>
    </div>
}