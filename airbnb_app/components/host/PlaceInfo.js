import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss";
import {
  setCheapestPrice,
  settitle,
  setHostDesc,
  insertHotel,
  setAllHotels,
} from "../../app/slices/hotelSlice";
import { useDispatch, useSelector } from "react-redux";

function PlaceInfo(props) {
  const { hotel } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  let [title, setTitle] = useState("");
  let [description, setDesc] = useState("");
  let [price, setPrice] = useState("");
  const InfoSubmit = () => {
    dispatch(setHostDesc(description));
    dispatch(setCheapestPrice(price));
    dispatch(settitle(title));
    console.log(hotel);
  };
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        <form className={style.sContainer}>
          <input
            className={`form-control ${style.formInput}`}
            placeholder="Create your title"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength="3"
          />

          <input
            className={`form-control ${style.formInput}`}
            placeholder="Create your description"
            type="text"
            name="Description"
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <input
            className={`form-control ${style.formInput}`}
            placeholder="$19"
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            required
            minLength="4"
          />
        </form>
      </div>
      <div className={style.Bcontainer}>
        <Link href={`${props.nextHref}`}>
          <button className={style.backBtn}>Back</button>
        </Link>
        <Link href={"/user/newhosting"} ><button
          className={style.nextBtn}
          onClick={() => {
            InfoSubmit();
          }}
        >
          Next
        </button>
       
        </Link>
         
      </div>
    </div>
  );
}

export default PlaceInfo;
