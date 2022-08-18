import React from 'react'
import style from "../../styles/banner.module.scss"
import Image from "next/image";


function HostBanner() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div className={`row ${style.containerB}`}>
      <section className={`${style.container} col-6`}>
        <header className={style.header}>
          <span style={{color:"#FF385C"}}>Air</span>Cover
        </header>
        <p className={style.paraB}>Top-to-bottom protection. Always included, always free. Only on Airbnb.</p>
        <button className={style.btnB}>Learn more</button>
      </section>
      <div className={`col-6`}>
        <Image
              loader={myLoader}
              src="https://a0.muscache.com/im/pictures/f409b291-8b55-4780-81c3-a067062982d1.jpg?im_w=2560&im_q=highq"
              width={500}
              height={500}
              className="d-block w-100"
            />
      </div>
    </div>
  )
}

export default HostBanner