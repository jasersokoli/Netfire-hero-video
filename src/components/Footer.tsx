import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__main">
      <span className="footer__logo" />
      <span className="footer__brand">Brand Name</span>
    </div>
    <div className="footer__legal">
      © 2024 <b>Brand Name</b> All rights reserved. Unauthorized use or copying of this brand is strictly prohibited. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of <b>Brand Name</b>, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.
    </div>
  </footer>
);

export default Footer; 