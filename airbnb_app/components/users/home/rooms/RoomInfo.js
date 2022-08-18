import React from "react";
import ImageComponent from "../../../shared/ImageComponent";
import style from "../../../../styles/hotel.module.scss";
import Link from "next/link";
import Feathers from "./Feathers";

function RoomInfo() {
  return (
    <div className={`${style.infoSection}`}>
      <section className={` ${style.hostInfo}  d-flex justify-content-between`}>
        <div >
          <h4>Island hosted by Ian</h4>
          <p>2 guests1 bedroom1 bed1 bath</p>
        </div>
        <div className="rounded-circle" style={{overflow:"hidden"}}>
          <ImageComponent
            src="/assets/avaters/150-1.jpg"
            width="60"
            height="60"
          />
        </div>
      </section>
      <section className={`${style.furryFriend} d-flex`}>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            height: "24px",
            width: "24px",
            fill: "currentcolor",
          }}
        >
          <path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        </svg>
        <div>
          <h5>Furry friends welcome</h5>
          <p>Bring your pets along for the stay.</p>
        </div>
      </section>
      <section className={`${style.airCover}`}>
        <h3>
          <span>Air</span>Cover
        </h3>
        <p>
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </p>
        <Link href="">Learn more</Link>
      </section>
      <section className={``}>
        <p>
          Quant self-catering cabin gently nestled into the historic family-run
          Dry Island. &#34;Otter Cabin&#34; is fitted out to a high standard
          with a double bedroom, shower room, open plan kitchen and living room
          and its own hot tub and decking area. This is a traditional
          self-catering unit. Kitchen basics and linens are provided. High-speed
          wifi is available. Unfortunately, the cabin is inaccessible to those
          with mobility difficulties. The space The cabin is completely fitted
          out with a double bedroom, shower room, open plan kitchen and living
          room. The decking area is just 5 metres from the water&#39;s edge.
          Dining area has picnic bench and pots of herbs for you to use. A
          second decking area stretching out in front of the French windows has
          a bench for seal and otter spotting. This is traditional self-catering
          unit. Linens and towels are provided. Tea, coffee, cooking basics,
          washing up liquid and spare loo roll are provided. The cabin is always
          clean, comfortable and quiet with outstanding views across the loch.
        </p>
        <Link href="">Show more</Link>
      </section>
      <section className={``}>
        <h3>Where you&#39;ll sleep</h3>
        <div>
          <ImageComponent
            src="https://a0.muscache.com/im/pictures/fab1b622-41b2-4a69-bf73-0a8204ac06d4.jpg?im_w=320"
            width="300"
            height="300"
          />
        </div>
        <h4>Bedroom</h4>
        <p>1 double bed</p>
      </section>
      <section className={``}>
        <h4>What this place offers</h4>
        <Feathers />
      </section>
    </div>
  );
}

export default RoomInfo;
