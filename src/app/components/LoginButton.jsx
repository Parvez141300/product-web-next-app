"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button onClick={() => signIn()} className="btn btn-primary rounded-lg">
        Login
      </button>
    </div>
  );
};

export default LoginButton;
