import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-section'>
            <div className='about-me'>
                <h5>Hey, I am Eshita Yasmin.</h5>
                <p>I am currently in the final year of Zoology department at Eden Mohila College, Dhaka. I like to solve various mathmatical and logical problems. That's why i find satisfaction in learning new things through programming. I want to build myself as a skilled developer through my best efforts. In the next two years i will established myself as a qualityful Full Stack Developer, Insha-Allah.</p>
            </div>
            <div>
                <img className='about-image' src="https://thumbs.dreamstime.com/b/avatar-business-woman-vector-graphic-wearing-colorful-shirt-front-view-over-isolated-background-concept-illustration-81929279.jpg" alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;