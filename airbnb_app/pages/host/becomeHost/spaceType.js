import React from 'react'
import Main from '../../../components/host/Main';
import Selections from '../../../components/host/Selections';
import style from "../../../styles/becomeHost.module.scss"

function spaceType() {
  let options =["Entire place","Private room","Shared room"]
  return (
    <div className={style.Mycontainer}>
      <Main text="What kind of space will guests have?"/>
      <Selections 
        selectOptions={options} optionName="spaceType"
        nextHref="/host/becomeHost/placeType" 
        backHref="/host/becomeHost/location"/>
    </div>
  )
}

export default spaceType