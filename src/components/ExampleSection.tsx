import React from 'react';
import '../styles/ExampleSection.css';

const ExampleSection: React.FC = () => (
  <section className="example-section">
    <button className="example-section__btn">EXAMPLE SECTION</button>
    <div className="example-section__headline">
      <span>Lorem </span>
      <span className="headline-green">ipsum</span>
      <span className="headline-gold"> dolor</span>
      <span className="headline-purple"> sit</span>
      <span className="headline-blue"> amet</span>
      <span className="headline-link"> consectetur adipiscing elit etiam molestie ex vel</span>
      massa lacinia ultricies.
    </div>
    <div className="example-section__desc">
      Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi vitae libero in nunc sodales.
    </div>
    <button className="example-section__see-more">SEE MORE</button>
  </section>
);

export default ExampleSection; 