import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './LogInForm.css';
import { useTimeout } from 'usehooks-ts';

function LogInForm() {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Logging in');
    setSubmitted(true);
  };

  const showAlert = () => {
    alert('You have been logged out.');
  };

  useTimeout(showAlert, submitted ? 120000 : null);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="pw"
            value={inputs.pw || ''}
            onChange={handleChange}
          />
        </label>
        <input type="submit" className="submitBtn" />
      </form>
    </div>
  );
}

export default LogInForm;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LogInForm />);