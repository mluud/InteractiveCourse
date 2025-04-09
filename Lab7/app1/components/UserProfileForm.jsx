import { UseState } from "react";

const UserProfileForm = () => {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

  return (
    <div>
      <form>
        <div>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            value={name} 
            id="name"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            value={email} 
            id="email"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            value={password} 
            id="password"
            onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
        </div>
      </form>
    </div>
  )
}

export default UserProfileForm