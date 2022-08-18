import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import style from "../../../styles/login.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../../app/slices/auth/authSlice";

function Login(props) {
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
    if (!isSuccess || !user) {
      // dispatch(reset())
      // navigate('/')
    }
  }, [user, isError, isSuccess, message, dispatch]);
  let onLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: your_email,
      password: pass,
    };
    dispatch(login(loginData));
    if (isError) {
      return message;
    } else {
      props.setTrigger(false);
      closePopup();
    }
  };

  let closePopup = () => {
    props.setTrigger(false);
  };
  return props.trigger ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <form method="post">
          <h3>Welcome to Airbnb</h3>
          <div className="row g-3 m-3 d-flex flex-column">
            <div className="">
              <label className="form-label" htmlFor="">
                Email
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
            className={` ${style.btn}`}
            type="submit"
            onClick={(e) => onLogin(e)}
            value="login"
          />
          {isError ? <p>{message}</p> : null}
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

export default Login;
