import React from 'react';
import './Footer.css';

function Column() {
  return (
    <div className='col'>
      <h4>Lorem Ipsum</h4>
      <ul className='list-unstyled'>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* Column 1 */}
          <Column />
          {/* Column 2 */}
          <Column />
          {/* Column 3 */}
          <Column />
          {/* Column 4 */}
          <Column />
        </div>
        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} Prototype.Inc | All right reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
