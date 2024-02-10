import { useState } from 'react';
import axios from 'axios';

const projectID = '76faae70-89d7-4748-9749-fdf6d32a034c';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('invalid credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title" style={{color: '#3B2A50'}}>Chat Me</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          {/* <div align="center"> */}
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          {/* </div> */}
        </form>
        <h1 style={{color:'red'}}>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;