import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './LogInForm.css'

function LogInForm(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Logging in");
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Password:
        <input 
          type="text" 
          name="pw" 
          value={inputs.pw || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" className="submitBtn" />
    </form>
      </div>
    )}
  
    export default LogInForm

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LogInForm />);