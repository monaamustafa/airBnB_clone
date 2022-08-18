import React from "react";
import BaseNav from "../../../components/layouts/navs/BaseNav";
import style from "../../../styles/profile.module.scss";
import ImageComponent from "../../../components/shared/ImageComponent";
import {GrValidate} from 'react-icons/gr'
import { useSelector } from "react-redux";
import Link from "next/link";

function profile(props) {
  const user = useSelector((state) => state.auth.user);

  return (
      <>
      <BaseNav />
      <main className="container">
        <div className="d-flex">
          <section className={style.userProfile}>
            <div className="text-center mb-5 " >
              <ImageComponent  className="rounded-circle"
              style={{overflow:"hidden"}}
                src="/assets/avaters/blank.png"
                width="100"
                height="100"
              />
            </div>
            <GrValidate className="mb-4 fs-2"/>
            <h4 className="mb-4">Identity verification</h4>
            <p className="border-bottom mb-4 pb-3">
              Show others you&#39;re really you with the identity verification
              badge.
            </p>
            <div>
              <p><Link href={'/user/wishlist'}>  your wishList </Link></p>
              <p><Link href={'/user/trips'}>your reservations</Link></p>
              <p><Link href={'/user/dashboard'}>go to your hotel dashboard</Link></p>
             </div>
          </section>
          <section>
            <h5>Hi, {user.name}</h5>
            <p>Joined in 2022</p>
            
            <div></div>
            <div>
              <h5>0 reviews</h5>
            </div>
            <div>

            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default profile;
