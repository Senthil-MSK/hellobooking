import React, { useState } from 'react';
import Slider from "react-slick";
import sliderImage from '../../assets/images/temp/Image1.png';
import sliderImage2 from '../../assets/images/temp/image2.png';
import sliderImage3 from '../../assets/images/temp/image3.png';

const ImageGallery = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const thhumbSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const CloseImageGallery = () => {
    props.onClose(false)
    // props.setRemoveItem(false)
  }
  return <div className="imageGallery" >
    <div className="galleryOverlay" onClick={CloseImageGallery} ></div>
    <div className="galleryContent" >
      <div className="galleryHeader" >Caprice Series 8” x 8” Porcelain Patterned</div>
      <div className="currentImage" >
        <Slider
         asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
          {...settings}
        >
            <div>
              <img className="img" src={sliderImage} />
            </div>
            <div>
              <img className="img" src={sliderImage2} />
            </div>
            <div>
              <img className="img" src={sliderImage3} />
            </div>
            <div>
              <img className="img" src={sliderImage2} />
            </div>
            <div>
              <img className="img" src={sliderImage3} />
            </div>
        </Slider>
      </div>
      <div className="sliderThumb" >
        <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
          {...thhumbSettings}
          focusOnSelect={true}
        >
            <div>
              <img className="img" src={sliderImage} />
            </div>
            <div>
              <img className="img" src={sliderImage2} />
            </div>
            <div>
              <img className="img" src={sliderImage3} />
            </div>
            <div>
              <img className="img" src={sliderImage2} />
            </div>
            <div>
              <img className="img" src={sliderImage3} />
            </div>
        </Slider>
      </div>
    </div>
  </div>
}

export default ImageGallery