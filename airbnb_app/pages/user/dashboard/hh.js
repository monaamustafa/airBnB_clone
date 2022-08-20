import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import style from "../../../styles/dashboard.module.scss";
import HostNav from '../../../components/host/HostNav'
import { getUserId } from '../../../app/slices/auth/authSlice';

function Dashboard() {
  const hotels = useSelector((state) => state.auth.user.hotels);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const data={
    id:user._id
  }
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getUserId(data))
  },[])

  return (
    <>
    <HostNav/>
    <div className={style.bg}>Host Dashboard</div>
    <div className={style.Mycontainer}>
        {hotels.length ? (
          <>
            {hotels.map((hotel, index) => (
              <div key={index} className={`${style.cardDiv} flex-wrap`}>
                <p className={style.para}>{hotel.title}</p>
                <p className={style.para}>Type: {hotel.type}</p>
                <p className={style.para}>Price: {hotel.cheapestPrice}$</p>
                <p className={style.para}>Distance: {hotel.distance}</p>
              </div>
            ))}
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
