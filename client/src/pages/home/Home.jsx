import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import classes from './home.module.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <FeaturedBlogs />
        </div>
    )
}

export default Home;