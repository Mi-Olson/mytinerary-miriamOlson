import { useRef } from "react";

import { Link as Anchor } from "react-router-dom";

import user_actions from "../store/actions/users";
const { signup } = user_actions
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function Form() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const dispatch=useDispatch();

  async function handleSignUp() {
    console.log(name.current.value);

    let data = {
      name: name.current.value,
      lastName: lastName.current.value,
      country: country.current.value,
      photo: photo.current.value,
      mail: mail.current.value,
      password: password.current.value,
    };
    if (photo.current.value === "") {
      delete data.photo
    }

    dispatch(signup({ data }))
      .then((res) => {
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Register in!",
          });
          navigate("/auth/signin");
        } else if (res.payload.messages.length > 0) {
          
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            text:res.payload.messages.join(" , ")
          });
        }
      })
      .catch((err) => console.log(err));
  }


return (
  <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
    <form style={{ width: "23rem" }}
    // className="flex flex-col grow justify-evenly items-center w-4/5"
    >
      <h3 class="fw-bold mb-2 pb-3" >Sing Up</h3>
      <div class="form-outline mb-2">
        <input

          ref={name}
          type="text"
          name="name"
          id="name"
          defaultValue=""
          placeholder="Type Name"
          class="form-control "
        />
        <label class="form-label" for="name">Name</label>
      </div>

      <div class="form-outline mb-2">
        <input
          ref={lastName}
          type="text"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Type Last Name"
          class="form-control "
        />
        <label class="form-label" for="lastname">Lastname</label>
      </div>

      <div class="form-outline mb-2">
        <input
          ref={country}
          type="text"
          name="country"
          id="country"
          defaultValue=""
          placeholder="Type country"
          class="form-control "
        />
        <label class="form-label" for="country">Type country</label>
      </div>

      <div class="form-outline mb-2">
        <input
          ref={photo}
          type="text"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Type Photo"
          class="form-control "
        />
        <label class="form-label" for="photo">Type photo</label>
      </div>
      <div class="form-outline mb-2">
        <input
          ref={mail}
          type="text"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
          class="form-control "
        />
        <label class="form-label" for="mail">Type mail</label>
      </div>
      <div class="form-outline mb-2">
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          defaultValue=""
          placeholder="Type Password"
          class="form-control"
        />
        <label class="form-label" for="password">Type password</label>
      </div>
      <div class="pt-1 mb-4">
        <button class="btn btn-info btn-lg btn-block"

          type="button"
          // className="bg-red-400 text-white w-4/5 py-4 text-center cursor-pointer btn-flat"
          // value="Sign Up!"
          onClick={handleSignUp}
        >Sign Up!</button>
      </div>
      <p>
        Already have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-red-800 cursor-pointer"
          to='/auth/signin'
        >
          Sign in
        </Anchor>
      </p>
    </form>
  </div>
);
}
