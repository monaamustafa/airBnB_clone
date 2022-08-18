import React from "react";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import style from "../../../styles/header.module.scss";
import Login from "../../../components/auth/login/Login";
import Registration from "../../auth/registration/Registration";
import ImageComponent from "../../shared/ImageComponent";
import { useSelector, useDispatch } from 'react-redux';
import {logout, reset, updateUser } from "../../../app/slices/auth/authSlice";

function MainNav() {
  const dispatch = useDispatch();
  const [LpopupBtn, setLpopupBtn] = useState(false);
  const [RpopupBtn, setRpopupBtn] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  const BEHost = () => {
    const testu={
      id:user._id,
      isAdmin:"host"
  
    }  
    console.log(testu)
    dispatch(updateUser(testu));
  };
  return (
    <>
      <nav
        className={`navbar py-2 navbar-expand-lg bg-white  ${style.mainNav}`}
      >
        <div className="container">
          <a className="navbar-brand" href="">
            <Link href="/">
              <div className="d-flex align-items-center">
                <ImageComponent
                  src="/assets/airbnb.png"
                  width="30"
                  height="30"
                />
                <span>airbnb</span>
              </div>
            </Link>
          </a>
          <div className={`d-flex align-items-center ${style.navSearch}`}>
            <p>Anywhere </p>|<p>Any week</p>|<p>Add guests</p>
            <p className={style.searchIcon}>
              <AiOutlineSearch />
            </p>
          </div>
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
                {!isSuccess ? (
                  <>
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
                    <hr></hr>
                  </>
                ) : (
                  <>
                    {" "}
                    <li className="dropdown-item">
                      {/* {console.log(user.name)} */}
                      <Link
                        href={`/user/profile/`}
                        // href={''}
                        className="dropdown-item"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      {/* {console.log(user.name)} */}
                      <Link
                        href={`/user/dashboard`}
                        className="dropdown-item"
                      >
                        dashboard
                      </Link>
                    </li>
                    <hr style={{ color: "#222222" }}></hr>
                <li>
                  <Link href={`/user/trips`}>
                    <a className="dropdown-item">Trips</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/wishlist`}>
                    <a className="dropdown-item">WishList</a>
                  </Link>
                </li>
           
                  </>
                )}
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
                 {isSuccess ? ( 
                  <li onClick={onLogout}> 
                  
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
        {isError&&(<p>{message}</p>)}
        
      </nav>
      <Login trigger={LpopupBtn} setTrigger={setLpopupBtn} />
      <Registration trigger={RpopupBtn} setTrigger={setRpopupBtn} />
    </>
  );
}

export default MainNav;
