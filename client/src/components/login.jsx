import React from 'react';

export default function Login() {
  return (
    <div className='loginContainer'>
      <h2> Login</h2>
      <form method="post">
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password :&nbsp;</label>
          <input type="password" name="password" />          <button>Login</button>
        </div>
        <div>
        </div>
      </form><br />
      <div className="blueLink">Create an Account</div>
    </div>
  );
}