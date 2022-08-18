import React from 'react';
import style from '../../../styles/becomeHost.module.scss';
import Main from '../../../components/host/Main';
import PlaceInfo from '../../../components/host/PlaceInfo';

function info() {
  return (
    <div className={style.Mycontainer}>
      <Main text="Let's give your place a name, description and set your price" />
      <PlaceInfo
        nextHref="/host/becomeHost/photos"
        backHref="/users/host/dashboard"
      />
    </div>
  );
}

export default info;
