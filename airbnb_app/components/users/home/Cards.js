import React, { useEffect, useState } from "react";
import style from "../../../styles/home.module.scss";
import CardSlider from "./CardSlider";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels, filterData } from "../../../app/slices/hotelSlice";
// import { setWishList } from "../../../app/slices/wishListSlice";
import Link from "next/link";
import { setlogedUser, updateUser } from "../../../app/slices/auth/authSlice";

function Cards() {
  let hoteldata = useSelector((state) => state.hotel.hotels);
  const user = useSelector((state) => state.auth);

  const filterType = useSelector((state) => state.filterType.value);
  let filterArr = [];

  const addtoWishList = (id) => {
      const testu={
      id:user.user._id,
      wishlist:id
  
    }  
    console.log(testu)
    dispatch(updateUser(testu));

    // dispatch(updateUser(wish));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if(user){
      dispatch(setlogedUser(user));
    }
    dispatch(fetchHotels());
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          {filterArr.length ? (
            <>
              {filterArr.map((hotel, index) => (
                <div key={hotel.id} className={style.homeCardBox}>
                  <div className={style.CardBoxHeartIcon}>
                    <button
                    // onClick={() => {
                    //   addtoWishList(hotel);
                    // }}
                    >
                      <AiFillHeart />
                      {/* {heartColor?(<AiFillHeart key={index}/>):(<AiOutlineHeart key={index} />)} */}
                    </button>
                  </div>
                  <CardSlider dumImg={hotel.images} hotID={index} />
                  <div
                    className={`d-flex  justify-content-between ${style.pname}`}
                  >
                    <h6>
                      <Link className={style.pname} href={`/room/${hotel._id}`}>
                        {hotel.name}
                      </Link>
                    </h6>
                    <p className="fs-6">
                      <AiFillStar /> {hotel.rating}
                    </p>
                  </div>
                  <p className={style.pnamee}>{hotel.type}</p>
                  <p className={style.pnamee}>{hotel.distance}</p>
                  <p style={{ fontWeight: "600" }}>
                    ${hotel.cheapestPrice}{" "}
                    <sub style={{ fontWeight: "400" }} className="fs-6">
                      night
                    </sub>
                  </p>
                </div>
              ))}
            </>
          ) : (
            <>
              {hoteldata.map((hotel, index) => (
                <div key={hotel._id} className={style.homeCardBox}>
                  <div className={style.CardBoxHeartIcon}>
                    {user.isSuccess ? (
                      <>
                        <button
                          onClick={() => {
                            addtoWishList(hotel);
                          }}
                        >
                          <AiFillHeart />
                        </button>
                      </>
                    ) : (
                      <>
                        <button>
                          <AiFillHeart />
                        </button>
                      </>
                    )}
                  </div>
                  <CardSlider dumImg={hotel.images} hotID={index} />
                  <div
                    className={`d-flex  justify-content-between ${style.pname}`}
                  >
                    <h6>
                      <Link className={style.pname} href={`/room/${hotel._id}`}>
                        {hotel.name}
                      </Link>
                    </h6>
                    <p className="fs-6">
                      <AiFillStar /> {hotel.rating}
                    </p>
                  </div>
                  <p className={style.pnamee}>{hotel.type}</p>
                  <p className={style.pnamee}>{hotel.distance}</p>
                  <p style={{ fontWeight: "600" }}>
                    ${hotel.cheapestPrice}{" "}
                    <sub style={{ fontWeight: "400" }} className="fs-6">
                      night
                    </sub>
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
