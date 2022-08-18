import React from "react";
import style from "../../../styles/filterNav.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineFilter } from "react-icons/ai";
import ImageComponent from "../../shared/ImageComponent";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "../../../app/slices/filterSlice";

function FilterNav() {
  const dispatch = useDispatch();
  
  const responsive = {
    0: { items: 5 },
    568: { items: 8 },
    1024: { items: 10 },
  };

  const items = [
    <div key={0} className="item" data-value="1" onClick={()=>{
      dispatch(getType("island"))
    }}>
      <ImageComponent
        src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
        width="25"
        height="25"
        alt="fkjjf"
        
      />
      <p >Islands</p>
    </div>,
    <div key={1} className="item" data-value="2" 
    onClick={()=>{
      dispatch(getType("beach"))
    }}
    >
      <ImageComponent
        src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>beach</p>
    </div>,
        <div key={3} className="item" data-value="4" 
        onClick={()=>{
          dispatch(getType("Shared homes"))}}
        >
        <ImageComponent
          src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg"
          width="25"
          height="25"
          alt="fkjjf"
        />
        <p>Shared homes</p>
      </div>,
      <div key={4} className="item" data-value="5" 
      onClick={()=>{
        dispatch(getType("Cave"))}}
        >
        <ImageComponent
          src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
          width="25"
          height="25"
          alt="fkjjf"
        />
        <p>Caves</p>
      </div>,
    <div key={3} className="item" data-value="4" 
     onClick={()=>{
      dispatch(getType("Cave"))
    }}
    >

      <ImageComponent
        src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>Amazing pools</p>
    </div>,
    <div key={4} className="item" data-value="5" 
    onClick={()=>{
      dispatch(getType("pool"))}}
      >
      <ImageComponent
        src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>OMG</p>
    </div>,
    <div key={3} className="item" data-value="4">
      <ImageComponent
        src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>Tiny homes</p>
    </div>,
    <div key={4} className="item" data-value="5">
      <ImageComponent
        src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>Arctic</p>
    </div>,
    <div key={4} className="item" data-value="5">
      <ImageComponent
        src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p>Design</p>
    </div>,
    <div key={4} className="item" data-value="5">
      <ImageComponent
        src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
        width="25"
        height="25"
      />
      <p>Surfing</p>
    </div>,
    <div key={2} className="item" data-value="3"  onClick={()=>{
      dispatch(getType("parks"))
    }}>
      <ImageComponent
        src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
        width="25"
        height="25"
        alt="fkjjf"
      />
      <p onClick={console.log("mona")}>National parks</p>
    </div>,
  ];
  return (
    <div className={style.filternavBorder}>

    <div className="container">
      <div
        className={`d-flex flex-wrap justify-content-center  ${style.filterBox}`}
      >
        <div className={style.filterIconsBar}>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            // disableDotsControls={true}
            disableButtonsControls={true}
            controlsStrategy="alternate"
            
            // disableSlideInfo={false}
            // keyboardNavigation={false}
            // ArrowLeft={false}
          />
        </div>
        {/* <div className={`d-flex justify-content-between ${style.filterNavTp} ${style.bosStyle}`}>
          <p>clear filter</p>
        </div> */}
      </div>
      </div>
    </div>
  );
}

export default FilterNav;
