import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/Logo.svg';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__top"></div>
    <div className="footer__main page-width">
      <div className="footer__logo">
        <a href="/">
          <span className="logo-icon">
            <img src={logo} alt="Logo" width={65} height={65} />
          </span>
          <span className="footer__brandname">Brand Name</span>
        </a>        
      </div>
      <div className="footer__legal">
        © 2024 <strong>Brand Name</strong> All rights reserved. Unauthorized use or copying of this brand is strictly prohibited. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of <strong>Brand Name</strong>, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.
      </div>
    </div>
  </footer>
);

export default Footer; 