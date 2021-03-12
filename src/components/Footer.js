import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Footer() {

  const date = new Date(); 

  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our insurance newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="contained" color="primary"> Subscribe </Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a target="_blank" href='http://hongkonginsurancebrokers.com/piba'>Member of Profession Insurance Brokers Association (PIBA)</a>
            <a target="_blank" href='http://www.hkcii.org/'>Member of Hong Kong Chambers of Insurance Intermediares (HKCII)</a>
            <br/>
            <a target="_blank" href='https://www.ia.org.hk/en/index.html'>Insurance Authority License Number: FB1483</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p> 15/F, Tiffan Tower </p>
            <p> 199 Wanchai Road, Wanchai, Hong Kong </p> 
            <p><a href="mailto:perry.lee@united-china.com.hk"> perry.lee@united-china.com.hk</a></p>

            <p> Tel: +852-3103-9222 </p>
            <p> Fax: +852-3585 3510 </p>
          </div>
        </div>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div> */}
      </div>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
         
          <small class='website-rights'> © {date.getFullYear()} United China Professional Brokers LTD. </small>

          {/* <div class='social-icons'>
            <Link
              class='social-icon-link-fb'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link-ig'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link-yt'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link-twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link-linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
