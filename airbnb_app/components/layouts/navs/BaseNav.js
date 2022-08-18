import React from "react";
import { useState } from "react";
import Link from "next/link";
import { GiWorld } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// BiMenuAltLeft;

import style from "../../../styles/header.module.scss";
import Login from "../../../components/auth/login/Login";
import Registration from "../../auth/registration/Registration";
import ImageComponent from "../../shared/ImageComponent";
// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../../../app/slices/auth/authSlice";
function BaseNav() {
  const [LpopupBtn, setLpopupBtn] = useState(false);
  const [RpopupBtn, setRpopupBtn] = useState(false);
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-white  ${style.mainNav}`}>
        <div className="container">
          <Link className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
                  <ImageComponent
                    src="/assets/airbnb.png"
                    width="30"
                    height="30"
                  />
                <span>airbnb</span>

            </div>
          </Link>
          <div className="d-flex align-items-center justify-content-between ">
            <div className={style.hostLink}>
              <Link href="/host">Become a Host</Link>
            </div>
            <div>
              <GiWorld />
            </div>
            <div className={`dropdown ${style.dropBox}`}>
              <button
                className={`btn ${style.bosStyle}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BiMenuAltLeft />
                <FaUserCircle />
              </button>
              <ul className="dropdown-menu">
                {/* {console.log("user", user)}
                {!user.isSuccess ? (
                  <> */}
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setRpopupBtn(true)}
                      >
                        Sign up
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setLpopupBtn(true)}
                      >
                        Log in 
                      </a>
                    </li>
                  {/* </>
                ) : (
                  <> */}
                    {" "}
                    <li className="dropdown-item">
                      {/* {console.log(user.name)} */}
                      <Link
                        // href={`/users/profile/${user._id}`}
                        href={''}
                        className="dropdown-item"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      {/* {console.log(user.name)} */}
                      <Link
                        // href={`/users/host/dashboard`}
                        href={''}
                        className="dropdown-item"
                      >
                        dashboard
                      </Link>
                    </li>
                  {/* </>
                )} */}
                <hr style={{ color: "#222222" }}></hr>
                <li>
                  <Link href={`/trips`}>
                    <a className="dropdown-item">Trips</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/wishlist`}>
                    <a className="dropdown-item">WishList</a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Host your home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Host an experience
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Help
                  </a>
                </li>
                {/* {user.isSuccess ? ( */}
                  {/* <li onClick={onLogout}> */}
                  <li >
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                {/* ) : null} */}
              </ul>
       </div>
          </div>
        </div>
      </nav>
      <Login trigger={LpopupBtn} setTrigger={setLpopupBtn} />
      <Registration trigger={RpopupBtn} setTrigger={setRpopupBtn} />
    </>
  );
}

export default BaseNav;
