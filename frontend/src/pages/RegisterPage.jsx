import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccountPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function createAccount() {
   
        
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
              <h3>Uonder Register</h3>
                {error && <p>{error}</p>}
        <div className="mb-3">
          <label>Email Address</label>
          <input
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

        </div>

        <div className="mb-3">
        <label>Password</label>
          <input
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />

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

