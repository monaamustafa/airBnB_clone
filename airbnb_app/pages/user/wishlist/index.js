import Link from "next/link";
import React, { useEffect, useState } from "react";
import MainNav from "../../../components/layouts/navs/MainNav";
import Footer from "../../../components//layouts/footers/Footer";
import style from "../../../styles/home.module.scss";
import CardSlider from "../../../components/users/home/CardSlider";
import { useDispatch, useSelector } from "react-redux";

const WishList = () => {
  const wishListData = useSelector((state) => state.auth.user.wishlist);
  return (
    <>
      <MainNav />
      <div className="container mt-3">
        <div className="row">
          <h1>WishList</h1>
        </div>
      </div>
      <hr />
      <div className={style.container}>
      <div className="d-flex flex-wrap justify-content-between">
          {wishListData.length?(
            <>
              {wishListData.map((item) => (
                <div key={item.id} className={style.homeCardBox}>
                  <div className={style.CardBoxHeartIcon}></div>
                  <CardSlider dumImg={item.images} hotID={item.id} />
                  <div className="d-flex justify-content-between">
                    <h4>
                      <Link href="/">{item.name}</Link>
                    </h4>
                  </div>
                <p className={style.pnamee}>{item.type}</p>
                <p className={style.pnamee}>{item.distance}</p>
                <p style={{ fontWeight: "600" }}>
                  ${item.cheapestPrice}
                  <span style={{ fontWeight: "400" }} className="fs-6">
                    night
                  </span>
                </p>
                </div>
              ))}
            </>
          ):(<><EmptyList/>
          </>) }
        </div>
       </div>
      <Footer></Footer>
    </>
  );
};

export default WishList;

const EmptyList = () => {
  return (
    <div className="px-4   rounded-3 ">
      <div className="container ">
        <div className="row">
          <h2>Your WishList is Empety...</h2>
          <p className="ms-4"> You can add your favorite places here now</p>
          <Link href={`/`}>
            <a>
              <button className="btn btn-white my-3 p-3 text-bold">
                Add Now
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
