import React from 'react'
import style from "../../styles/banner.module.scss"

function Banner() {
  return (
    <div className={style.container}>
      <header className={style.header}>You can host anything, anywhere</header>
      <section className={style.section}>
        <p className={style.para}>Questions about hosting? Ask a Superhost.</p>
        <button className={style.btn}>Learn more</button>
        
      </section>
    </div>
  )
}

export default Banner