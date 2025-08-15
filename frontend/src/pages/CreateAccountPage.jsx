import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccountPage(){
    const [email, setEmail] = useState('');
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
            setError(e.message);
        }
    }

   return (
      <>
       <div className="auth-wrapper">
        <div className="auth-inner">
        <h3>Create Account</h3>
        {error && <p>{error}</p>}
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
        <label>Email Address</label>
      <input
        placeholder='Your email address'
        className="form-control" 
        value={email}
        onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Password</label>
         <input
        placeholder='Your password'
        className="form-control" 
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
         <input
        placeholder= 'Confirm password'
        className="form-control" 
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)} />
        </div>

        <div className="d-grid">
        <button onClick= {createAccount}>Create Account</button>

        <Link to='/login'> Already have an account? Log In</Link>
        </div>
       </div>
       </div>
     </>
    );
}

