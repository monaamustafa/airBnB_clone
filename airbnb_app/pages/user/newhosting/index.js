import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import style from "../../../styles/dashboard.module.scss";
import HostNav from '../../../components/host/HostNav'
import { getUserId } from '../../../app/slices/auth/authSlice';
import Link from 'next/link';
import { insertHotel } from '../../../app/slices/hotelSlice';

function Dashboard() {
  const {hotel} = useSelector((state) => state.hotel);
  const dispatch=useDispatch();0
  const submitAll = () => {
    dispatch(insertHotel(hotel));
  };
  
  return (
    <>
    <HostNav/>
    <div className={style.bg}
    ><h3>congrats congrates on your new hosting {hotel.type}</h3>
    {hotel? (
          <>
              <div  className={`${style.cardDiv} flex-wrap`}>
                <p className={style.para}>{hotel.title}</p>
                <p className={style.para}>Type: {hotel.type}</p>
                <p className={style.para}>Price: {hotel.cheapestPrice}$</p>
                <p className={style.para}>Distance: {hotel.distance}</p>
              </div>
              <Link href={"/user/dashboard"}>
          <button className={style.nextBtn} onClick={submitAll}>
            submit
          </button>
        </Link>
             {/* <p className='fs-6'> <Link href={'/user/dashboard'}> go to your dashboard </Link></p>
           <p className='fs-6'>  <Link href={'/'}> homePage </Link></p>  */}
          </>
        ) : (
          <>
            <p className="fs-1">Try hosting now</p>
            <hr></hr>
          </>
        )}

    </div>
  </>

  )
}

export default Dashboard
