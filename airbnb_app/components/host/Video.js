import style from '../../styles/video.module.scss';

function Video(props) {
  let vsrc =props.src

  return (
    <>
      <video className={style.video} autoPlay loop>
        <source 
        src={`${vsrc}`}
        type='video/mp4'
        >  
        </source>
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default Video