import React from 'react';
import {images} from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort,  } from 'react-icons/bs';
import './Gallery.css';

const galleryImages = [ images.gallery05, images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction == 'left'){
      current.scrollLeft -= 350;
    }
    else{
      current.scrollLeft += 350;
    }
  }

  return (
  <div className='app__gallery flex__centre'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' /> 
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Welcome to House of Chefs, where delicious food and great service come together. Follow us for mouth-watering dishes, special events and promotions, and a behind-the-scenes look at our kitchen. See you soon! #houseofchefs #foodie #delicious</p> 
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        { galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt='gallery img' />
            < BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
        < BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        < BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
}

export default Gallery;
