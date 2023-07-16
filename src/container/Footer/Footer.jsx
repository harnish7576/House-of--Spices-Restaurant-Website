import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';


import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    < FooterOverlay />
    < Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>221B Baker St., Whatcroft Hall Lane, NY 14002</p>
        <p className='p__opensans'>+1-212-344-1230</p>
        <p className='p__opensans'>+1-212-557-1799</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.hoc} alt='footerlogo img' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in service of others."</p>
        <img src={images.spoon} alt='footerspoon img' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          < FiFacebook />
          < FiTwitter />
          < FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10 am - 10 pm</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10 am - 12 am</p>
      </div>
    </div>
    
    <div className='footer__copyright'>
        <p className='p__opensans'>2023 House of Chefs. All Rights Reserved</p>
      </div>
  </div>
);

export default Footer;
