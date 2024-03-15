import PropTypes from 'prop-types';
import React from 'react';
import './Hero.scss';
import { Icon } from '@iconify/react';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';

const Hero4 = ({ data, fetchedData }) => {
  const {bgImgLink } = data;
  return (
    <section id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: `url(${bgImgLink})` }}>
      <div className="container">
        <div className="st-hero-text">
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{perser(`Hi, I am <span>${fetchedData?.about?.name}</span>`)}</h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{perser(fetchedData?.about?.title)}</p>
          <SocialLinks2 data={fetchedData?.social_handles} />
        </div>
      </div>
    </section>
  )
}

Hero4.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero4;
