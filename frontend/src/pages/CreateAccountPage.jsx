import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import PasswordChecklist from "react-password-checklist"


export default function CreateAccountPage(){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function createAccount() {
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match!');
            return;
        }
        
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/management');
        }   catch  (e)  {
            setError('Please ensure correct information has been used');
        }
    }

   return (
      <>
       <div className="auth-wrapper">
        <div className="auth-inner">
        <h3>Create Account</h3>
        {error && <p>{error}</p>}
        <div className="mb-3">
          <label>*Required</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)} 
            required
            />
                </div>
        <div className="mb-3">
          <label>*Required</label>
          <input type="text" 
          className="form-control" 
          placeholder="Last name" 
          onChange={e => setLastName(e.target.value)} 
          required
          />
          </div>

        <div className="mb-3">
        <label>*Required</label>
      <input
        placeholder='Your email address'
        className="form-control" 
        value={email}
        onChange={e => setEmail(e.target.value)} 
        required/>
        </div>

        <div className="mb-3">
          <label>*Required</label>
         <input
        placeholder='Your password'
        className="form-control" 
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)} 
        required/>
        
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
         <input
        placeholder= 'Confirm password'
        className="form-control" 
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)} 
        required/>

      <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5} 
				value={password}
				valueAgain={confirmPassword}
				messages={{minLength: "Password must have at least 5 characters.",
					specialChar: "Password must have at least 1 special character",
					number: "Password must have at least 1 number",
					capital: "Password must include at least 1 Capital",
					match: "Password and Confirm Password do not Match!.",
}}
			/>
        </div>

        <div className="d-grid">
        <button className="btn btn-primary" onClick= {createAccount}>Create Account</button>

           </div>
        <p className="forgot-password text-right">
          <Link to='/login'> Already have an account? Log In</Link>
      </p>
       </div>
       </div>
      </>
    )
  }

