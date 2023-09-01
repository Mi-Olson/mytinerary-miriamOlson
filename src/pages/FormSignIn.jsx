import { useRef } from "react";
import { Link as Anchor, Navigate, useNavigate } from "react-router-dom";

// import apiUrl from "../services/apiUrl";
//import axios from "axios";


export default function Form() {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const navigate=useNavigate();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
    navigate('/home')
  }
  return (
    <form className="flex flex-col grow justify-evenly items-center w-4/5">
      <input
        ref={mail_signin}
        type="text"
        className="w-4/5 py-4 text-center"
        name="mail_signin"
        id="mail_signin"
        defaultValue=""
        placeholder="Type Mail"
      />
      <input
        ref={password_signin}
        type="password"
        className="w-4/5 py-4 text-center"
        name="password_signin"
        id="password_signin"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="btn-flat text-white w-4/5 py-4 text-center cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
      />
      <p>
        Don't you have an account?{" "}
        <Anchor
          className="text-[20px] font-bold  cursor-pointer"
          to='/auth/signup'
        >
          Sign up
        </Anchor>
      </p>
    </form>
  );
}
