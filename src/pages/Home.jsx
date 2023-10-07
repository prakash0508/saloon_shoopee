import React from 'react';
import Banner from '../components/home_compo/Banner';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import Products from '../components/Products';
import Why_choose from '../components/home_compo/Why_choose';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Why_choose />
            <Blog />
            <Testimonial />
        </div>
    );
};

export default Home;