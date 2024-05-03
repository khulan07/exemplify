import React from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const Login = () => {
  return (
    <div> 
      <h1>Login</h1>
      <SignedIn>
        <p>You are signed in!</p>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Login;
