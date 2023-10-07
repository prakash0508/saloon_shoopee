import React from 'react';
import Banner from '../components/home_compo/Banner'
import Why_choose from '../components/home_compo/Why_choose';
import Testimonial from '../components/Testimonial';

const About = () => {
    return (
        <div>
            <Banner />
            <Why_choose />
            <div className='mb-5'>

            <Testimonial />
            </div>
        </div>
    );
};

export default About;