import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
          <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        
        left="98%"
        bottom="40%"
        position="absolute"
        transform={'translate(0%, -50%)'}
        zIndex={2}>
        <BiRightArrowAlt color='black'  />
      </IconButton>
      </div>
        
       
      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
         <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        top="50%"
        right=""
        position="absolute"
        transform={'translate(0%, -50%)'}
        zIndex={2}>
        <BiLeftArrowAlt />
        
      </IconButton>
      </div>
    );
  }
  
function Carouseltwo({passed}) {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <div className="Carouseltwo">
    
      {/* Right Icon */}
     
      <Slider {...settings}>
        {passed.map((item,i) => (
          <div className="card" key={i}>
            <div className="card-top">
              <img
                src={
                     item.linkImg
                }
                alt="img"
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carouseltwo;