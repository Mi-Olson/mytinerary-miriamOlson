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
    

<section class="vh-80">
<div class="container-fluid ">
  <div class="row">
    <div class="col-sm-6 text-black">

      {/* <div class="px-5 ms-xl-4">
      <img src="../../img/logo.png" width="200" height="100"  className="img-responsive" alt="titulo" />
     
      </div> */}

      <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

        <form style={{width: "23rem"}}>

          <h3 class="fw-normal mb-3 pb-3" >Log in</h3>

          <div class="form-outline mb-4">
            <input 
             ref={mail_signin}

            type="email" 
            defaultValue=""
            name="mail_signin"
            id="mail_signin"
            placeholder="Type Mail"
            class="form-control form-control-lg" />
            <label class="form-label" for="mail_signin">Email address</label>
          </div>

          <div class="form-outline mb-4">
            <input
            ref={password_signin}
            type="password"
            name="password_signin"
            id="password_signin"
            defaultValue=""
           placeholder="Type Password"
              class="form-control form-control-lg" />
            <label class="form-label" for="password_signin">Password</label>
          </div>

          <div class="pt-1 mb-4">
            <button class="btn btn-info btn-lg btn-block"  onClick={handleSignIn} type="button">Login</button>
          </div>

          {/* <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p> */}
          <p>Don't have an account?  <Anchor
          className="text-[20px] font-bold  cursor-pointer"
         to='/auth/signup'
      >
       Sign up
        </Anchor></p>

        </form>

      </div>

    </div>
    <div class="col-sm-6 px-0 d-none d-sm-block">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
        alt="Login image" class="w-100 vh-100" />
    </div>
  </div>
</div>
</section>
  );
}
