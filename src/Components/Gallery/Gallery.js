import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h1 className='gallery-title'>My Gallery</h1>
            <div className='gallery'>
            <div className='image-div'>
               <img  className='gallery-image' src="https://webneel.com/daily/sites/default/files/images/daily/04-2013/13-best-bird-photography-by-christopher.jpg" alt="" srcset="" />
            </div>
            <div className='image-div'>
            <img  className='gallery-image' src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/10/OakTree.jpg?fit=750%2C563&ssl=1" alt="" srcset="" />
            </div>
            <div className='image-div'>
            <img className='gallery-image' src="https://mymodernmet.com/wp/wp-content/uploads/2019/12/photos-of-indonesia-rarindra-prakarsa-17.jpg" alt="" />
            </div>
            <div className='image-div'>
                <img  className='gallery-image' src="https://thumbor.forbes.com/thumbor/711x453/https://specials-images.forbesimg.com/imageserve/5ef9efe9236e830006d405ff/Bangladeshi-boy-with-flowers-under-the-rain-/960x0.jpg?fit=scale" alt="" srcset="" />
            </div>
            <div className='image-div'>
                <img className='gallery-image' src="http://llandscapes-10674.kxcdn.com/wp-content/uploads/2016/05/stony-man-mountain-2.jpg" alt="" srcset="" />
            </div>
            <div className='image-div'>
                <img className='gallery-image' src="https://i.pinimg.com/736x/16/1c/97/161c9722baf615959ad5df1ecbe40598.jpg" alt="" srcset="" />
            </div>
            <div className='image-div'>
                <img className='gallery-image' src="https://mymodernmet.com/wp/wp-content/uploads/2017/09/junebug-weddings-best-destination-wedding-photography-9.jpg" alt="" srcset="" />
            </div>
            <div className='image-div'>
                <img className='gallery-image' src="https://cdn01.vulcanpost.com/wp-uploads/2014/12/Edwin2.jpg" alt="" srcset="" />
            </div>
            <div className='image-div'>
                <img className='gallery-image' src="https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/best-tips-for-better-photography.jpg" alt="" srcset="" />
            </div>
            </div>
            
        </div>
    );
};

export default Gallery;