import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import style from '../../styles/becomeHost.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaceType, setSpaceType } from '../../app/slices/hotelSlice';

function Selections(props) {
  const type = useSelector((state) => state.hotel.hotel);
  const dispatch = useDispatch();

  let [soptions, setOptions] = useState([]);
  useEffect(() => {
    setOptions(props.selectOptions);
    console.log(props);
  }, [props]);
  const checkType = (type) => {
    if (props.optionName == 'selectType') {
      dispatch(setPlaceType(type));
    } else if (props.optionName == 'spaceType') {
      dispatch(setSpaceType(type));
    }
  };
  return (
    <div className={style.container}>
      <div className={style.sContainer}>
        {soptions.map((item, index) => {
          return (
            <button
              key={index}
              className={style.sBtn}
              onClick={() => checkType(item)}
            >
              {item}
            </button>
          );
        })}
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
  );
}

export default Selections;
