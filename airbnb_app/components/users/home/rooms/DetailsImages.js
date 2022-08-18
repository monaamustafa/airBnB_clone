import React from "react";
import style from "../../../../styles/hotel.module.scss";
import ImageComponent from "../../../shared/ImageComponent";

function DetailsImages(props) {
  return (

    <div className={`${style.imagesSection} d-flex  justify-content-between`}>
    {console.log(props.images)}
      <div className={`${style.mainImage}`}>
        <ImageComponent
          // src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          src={`http://localhost:8080/${props.images[0]}`}
          width="800"
          height="500"
        />
      </div>
      <div
        className={`${style.spiltImagesSection} d-flex flex-wrap justify-content-between`}
      >
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            // src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            // src={props.images[1]}
          src={`http://localhost:8080/${props.images[1]}`}
            
            width="280"
            height="172"
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            // src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            // src={props.images[2]}
          src={`http://localhost:8080/${props.images[2]}`}

            width="280"
            height="172"
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
            // src="https://images.unsplash.com/photo-1645395591882-fd6c8eb9aa81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292ZXJzJTIwc2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            // src={props.images[3]}
          src={`http://localhost:8080/${props.images[3]}`}

            width="280"
            height="172"
          />
        </div>
        <div className={`${style.spiltImags}`}>
          <ImageComponent
          src={`http://localhost:8080/${props.images[4]}`}
            width="280"
            height="172"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsImages;
