import React from 'react'
import Link from "next/link";
import style from "../../styles/becomeHost.module.scss"

function PlanForm(props) {
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        <div className={style.gContainer}>
          <label className={style.gLable}>Guests</label>
          <input className={style.formInput} type="number" maxLength={10} minLength={0} defaultValue={0}/>
        </div>
        <div className={style.gContainer}>
          <label className={style.gLable}>Beds</label>
          <input className={style.formInput} type="number" maxLength={10} minLength={0} defaultValue={0}/>
        </div>
        <div className={style.gContainer}>
          <label className={style.gLable}>Bedrooms</label>
          <input className={style.formInput} type="number" maxLength={10} minLength={0} defaultValue={0}/>
        </div>
        <div className={style.gContainer}>
          <label className={style.gLable}>Bathrooms</label>
          <input className={style.formInput} type="number" maxLength={10} minLength={0} defaultValue={0}/>
        </div>
      </div>
      <div className={style.Bcontainer}>
        <Link href={`${props.nextHref}`}>
          <button className={style.backBtn}>Back</button>
        </Link>
        <Link href={`${props.backHref}`}>
          <button className={style.nextBtn}>Next</button>
        </Link>
      </div>
    </div>
  )
}

export default PlanForm