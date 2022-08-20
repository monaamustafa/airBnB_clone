import React, { useEffect, useState } from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setHostImage } from '../../app/slices/hotelSlice';

function PhotoInputs(props) {
  let [imag, setImage] = useState("");
  const dispatch = useDispatch();
  const ImageSubmit =()=>{
    dispatch(setHostImage(imag))
    }
    //  const submitinfo=(event)=>{
      // var url = "http://localhost:8080/images";
  //  var request = new XMLHttpRequest();
  //  request.open('POST', url, true);
  //  request.onload = function() { // request successful
      // we can use server response to our request now
      // console.log(request.responseText);
  //  };

  //  request.send(new FormData(event.target)); // create FormData from form that triggered event
  //  event.preventDefault();

    // }
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        <form
          className={style.sContainer}
          // action="http://localhost:8080/images"
           enctype="multipart/form-data"
          // method="POST"
        >
          <label
            className={style.gLable}
            htmlFor="img"
            style={{ paddingBottom: '10%', width: '60%' }}
          >
            Upload from your device
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="file"
            id="img"
            name="images"
            accept="image/*"
            multiple
          />
          <input type="submit"/>
          {/* <button onClick={(e)=>submitinfo(e)}></button> */}
        </form>
      </div>
      <div className={style.Bcontainer}>
        <Link href={`${props.nextHref}`}>
          <button className={style.backBtn}>Back</button>
        </Link>
        <Link href={`${props.backHref}`}>
          <button
            className={style.nextBtn}
            onClick={() => {
              ImageSubmit();
            }}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PhotoInputs