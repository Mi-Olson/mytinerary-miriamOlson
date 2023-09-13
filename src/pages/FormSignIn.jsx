import { useRef } from "react";
import { Link as Anchor, Navigate, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const {signin,signin_token}=user_actions
// import apiUrl from "../services/apiUrl";
//import axios from "axios";


export default function Form() {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const navigate=useNavigate();
  const dispach=useDispatch();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    let responseDispach=dispach(signin({data}))
    .then(res=>{
      if (res.payload.token){
         dispach(signin_token()),
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Logged in !!',
        showConfirmButton: false,
        timer: 1500
      }),navigate('/home')
    
    }
    else if (res.payload.messages.length >0)
      
      {
        let html=res.payload.messages.map(e=>`<p>${e}</p>`).join("")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          // text: res.payload.messages,
          html:html
        
        })

      }
    })
    .catch (err=> console.log(err));
    
    
  }
  let user=useSelector(store=>store)
  console.log(user);

  return (
    

<section className="vh-80 card-img-overlay m-10">
<div className="container-fluid ">
  <div className="row">
    <div className="col-sm-6 text-black">

      {/* <div className="px-5 ms-xl-4">
      <img src="../../img/logo.png" width="200" height="100"  className="img-responsive" alt="titulo" />
     
      </div> */}

      <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

        <form style={{width: "23rem"}}>

          <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

          <div className="form-outline mb-4">
            <input 
             ref={mail_signin}

            type="email" 
            defaultValue=""
            name="mail_signin"
            id="mail_signin"
            placeholder="Type Mail"
            className="form-control form-control-lg" />
            <label className="form-label" for="mail_signin">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input
            ref={password_signin}
            type="password"
            name="password_signin"
            id="password_signin"
            defaultValue=""
           placeholder="Type Password"
              className="form-control form-control-lg" />
            <label className="form-label" for="password_signin">Password</label>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-info btn-lg btn-block"  onClick={handleSignIn} type="button">Login</button>
          </div>

          {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
          <p>Don't have an account?  <Anchor
          className="text-[20px] font-bold  cursor-pointer"
         to='/auth/signup'
      >
       Sign up
        </Anchor></p>

        </form>

      </div>

    </div>
    <div className="col-sm-6 px-0 d-none d-sm-block">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
        alt="Login image" className="w-80 vh-80" />
    </div>
  </div>
</div>
</section>
  );
}
