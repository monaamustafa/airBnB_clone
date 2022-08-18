import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import style from "../../../../styles/hotel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../app/slices/auth/authSlice";

function BookingForm(props) {
  const user = useSelector((state) => state.auth.user);
const dispatch=useDispatch();
  const submitForm = () => {
    const testu={
      id:user._id,
      reservations:props.hotel
  
    }  
    console.log(testu)
    dispatch(updateUser(testu));
  };
  return (
    <div className={`${style.bookinSection}`}>
      <div className="d-flex justify-content-between">
        <p>
          $182 <sub>night</sub>
        </p>
        <p>
          <span>
            <AiFillStar /> 4.61.{" "}
          </span>{" "}
          <Link href=""> 18 reviews </Link>
        </p>
      </div>
      <div className={style.formSection}>
        <form>
          <div className="d-flex flex-wrap">
            <div className="mb-3">
              <label htmlFor="checkInID" className="form-label">
                Check In
              </label>
              <input
                type="date"
                className="form-control"
                id="checkInID"
                required
                placeholder="check in"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Check Out
              </label>
              <input
                type="date"
                required
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {/* <Link href={"/user/trips"}> */}
            <button
              onClick={() => {
                submitForm();
              }}
              className="btn btn-primary"
            >
              Check availability
            </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
