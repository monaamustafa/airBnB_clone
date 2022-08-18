import React from 'react'
import Main from '../../../components/host/Main';
import Selections from '../../../components/host/Selections';
import style from "../../../styles/becomeHost.module.scss"

function placeType() {
  let options =["Apartment","House","Secondary unit","Uniqe space","bed and breakfast"]
  return (
    <div className={style.Mycontainer}>
      <Main text="What kind of place will you host?"/>
      <Selections 
        selectOptions={options}
        optionName="selectType"
        nextHref="/host/intro" 
        backHref="/host/becomeHost/spaceType"/>
    </div>
  )
}

export default placeType