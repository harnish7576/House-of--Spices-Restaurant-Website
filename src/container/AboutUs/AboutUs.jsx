import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.initial} alt='image initial' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Discover the art of dining at our family-owned restaurant, where traditional dishes are elevated with fresh ingredients and a passion for flavor. Experience a memorable dining experience in our warm and inviting atmosphere.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="history_spoon" className="spoon__img" />
        <p className='p__opensans'>Step into the world of culinary tradition at our family-owned restaurant, where the rich heritage of authentic dishes is celebrated in every bite. Established with a passion for food and a dream of creating a warm and inviting atmosphere, we have been serving delicious meals for generations and look forward to welcoming you to our table.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
