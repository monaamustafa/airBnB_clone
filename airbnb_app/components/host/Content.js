import React from 'react';
import Link from 'next/link';
import style from '../../styles/content.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../app/slices/auth/authSlice';
// import {updateUser} from '../../app/slices/auth/authSlice';

function Content(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const tryHosting = () => {
    const testu={
      id:user._id,
      isAdmin:"host"
  
    }  
    console.log(testu)
    if (props.checkTry == 'tryNow') {
    dispatch(updateUser(testu));

    }
  };
  return (
    <div className={style.myDiv}>
      <header className={style.header}>{props.text}</header>
      <Link href={`${props.href}`}>
        <button className={style.btn} onClick={tryHosting}>
          {props.btnText}
        </button>
      </Link>
    </div>
  );
}

export default Content;
