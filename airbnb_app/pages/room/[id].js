import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../app/slices/hotelSlice";
import Footer from "../../components/layouts/footers/Footer";
import BaseNav from "../../components/layouts/navs/BaseNav";
import { useRouter } from "next/router";
import RoomInfo from "../../components/users/home/rooms/RoomInfo";
import BookingForm from "../../components/users/home/rooms/BookingForm";
import DetailsImages from "../../components/users/home/rooms/DetailsImages";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import style from "../../styles/hotel.module.scss";

const RoomDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const hotel = useSelector((state) => state.hotel.hotelDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoom(id));
    console.log("hoteldata", hotel);
  }, []);

  return (
    <>
      <header>
        <BaseNav />
      </header>
      <main>
        <div className={style.hotelDetails}>
          {hotel && (
            <div className="container">
              <div className={style.mainHotelInfo}>
                <h2>{hotel.name}</h2>
                <div
                  className={` ${style.mainHotelInfoContent} d-flex justify-content-between`}
                >
                  <p>
                    <span>
                      <AiFillStar /> {hotel.rating}.
                    </span>{" "}
                    <p className="d-inline text-decoration-underline">
                      {" "}
                      18. reviews{" "}
                    </p>
                    <p className="d-inline text-decoration-underline">
                      {" "}
                      {hotel.address}
                    </p>
                  </p>
                  <p>
                    <span>
                      {" "}
                      <IoShareOutline /> Share
                    </span>{" "}
                    <span>
                      <AiFillHeart />
                      Save
                    </span>
                  </p>
                </div>
              </div>
              {hotel.images&&hotel.images.length>=5?(<DetailsImages images={hotel.images} />
              ):null}
              {/* <DetailsImages images={hotel.images} /> */}
              <p>{hotel.name}</p>
              <div
                className={`${style.info} d-flex justify-content-between flex-wrap`}
              >
                <RoomInfo />
                <div className="formContainer">
                  <BookingForm hotel={hotel._id} />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RoomDetails;
