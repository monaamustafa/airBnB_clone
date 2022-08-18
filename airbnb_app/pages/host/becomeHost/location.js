import React from 'react'
import LocationForm from '../../../components/host/locationForm';
import Main from '../../../components/host/Main';
import style from "../../../styles/becomeHost.module.scss"

function location() {
  return (
    <div className={style.Mycontainer}>
      <Main text="Where's your place located?"/>
      <LocationForm
       nextHref="/host/becomeHost/spaceType" 
       backHref="/host/becomeHost/floorPlan"/>
    </div>
  )
}

export default location