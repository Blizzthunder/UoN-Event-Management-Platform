import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function logIn() {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/management');
        }   catch  (e)  {
            setError(e.message);
        }
    }

  return (
      <>       
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Uonder Login </h3>
                        {error && <p>{error}</p>}
          <label>Email address</label>
          <input
        placeholder='Your email address'
        className="form-control" 
        value={email}
        onChange={e => setEmail(e.target.value)} />

        <div className="mb-3">
          <label>Password</label>
          <input
        placeholder='Your password'
        type='password'
        className="form-control" 
        value={password}
        onChange={e => setPassword(e.target.value)} />

        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
         <button className="btn btn-primary"  onClick= {logIn}>Log In</button>
        <Link to='/register'> Don;t have an account? Create one here</Link>
    
        </div>
               </div>
       </div>
      </>
    )
  }

