import React from 'react'
import style from "../../../styles/becomeHost.module.scss"
import PhotoInputs from '../../../components/host/PhotoInputs';
import Main from '../../../components/host/Main';

function photos() {
  return (
    <div className={style.Mycontainer}>
      <Main text="Next, let's add some photos of your place"/>
        <PhotoInputs 
        nextHref="/host/becomeHost/floorPlan" 
        backHref="/host/becomeHost/info" />
    </div>
  )
}

export default photos