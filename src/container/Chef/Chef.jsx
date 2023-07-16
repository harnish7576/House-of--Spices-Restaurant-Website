import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef img' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote img' />
          <p className='p__opensans'>Discover the art of culinary innovation at the House of Chefs. Our</p>
        </div>
        <p className='p__opensans'>menu features bold flavors, vibrant colors and striking presentation. Our chefs use unexpected ingredients and techniques to craft a truly unique dining experience. Come indulge in our constantly evolving menu and be surprised and delighted with each bite.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} />
      </div>
    </div>
  </div>
);

export default Chef;
