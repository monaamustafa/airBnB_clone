import React from 'react'
import { useDispatch } from 'react-redux'
import Content from '../../components/host/Content'
import HostNav from '../../components/host/HostNav'
import Video from '../../components/host/Video'
import style from "../../styles/banner.module.scss"

function Intro() {
  
  return (
    <>
      <HostNav/>
      <div className={style.containerIntro} style={{ backgroundColor:"black"}}>
         <div>
            <Video src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"/>
         </div>
         <div className="">
            <Content text="Become a Host in 10 easy steps" href="/host/becomeHost/placeType" checkTry="tryNow"  btnText="Let's Go"/>
         </div>    
    </div>
    </>
  )
}

export default Intro