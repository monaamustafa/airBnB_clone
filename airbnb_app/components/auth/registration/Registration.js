import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import style from "../../../styles/registration.module.scss";
import { register, reset } from "../../../app/slices/auth/authSlice";

import { useSelector, useDispatch } from "react-redux";

function Registration(props) {
  let [Fname, setFname] = useState("");
  let [your_email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      // toast.error(message)
    }

    if (isSuccess || user) {
      // dispatch(reset())

      // navigate('/')
    }

  }, [user, isError, isSuccess, message, dispatch])

  let onRegister = (e) => {
    e.preventDefault();
    const formData = {
      name: Fname,
      email: your_email,
      password: pass,
    };
    dispatch(register(formData))
    props.setTrigger(false);
    closePopup();
  };

  let closePopup = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <form>
          <h3>Sign up</h3>
          <div className="row g-3 m-3 d-flex flex-column">
            <div className="">
              <label className="form-label" htmlFor="">
                Your Name
              </label>
              <input
                className="form-control"
                placeholder="Enter your name"
                type="text"
                name="firstname"
                onChange={(e) => setFname(e.target.value)}
                required
                minLength="3"
              />
            </div>

            <div className="">
              <label className="form-label" htmlFor="">
                Your Email
              </label>
              <input
                className="form-control"
                placeholder="Enter your email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="">
              <label className="form-label" htmlFor="">
                Password
              </label>
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
                required
                minLength="4"
              />
            </div>
          </div>

          <input
            className={style.btn}
            type="submit"
            onClick={(e) => onRegister(e)}
            value="Sign Up"
          />

          <AiOutlineClose
            className={style.cBtn}
            onClick={() => closePopup()}
          ></AiOutlineClose>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Registration;
