import React from 'react';
import '../styles/ExampleSection.css';

const ExampleSection: React.FC = () => (
  <section className="example-section">
    <div className="page-width">
      <button className="example-section__btn">EXAMPLE SECTION</button>
      <h3 className="example-section__headline">
        <span>Lorem</span> ipsum dolor sit amet  consectetur adipiscing elit etiam molestie ex vel <span>massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi vitae libero in nunc sodales.</span>
      </h3>
      <button className="example-section__see-more">SEE MORE</button>
    </div>
  </section>
);

export default ExampleSection; 