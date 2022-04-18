import React from 'react';

const CheckOut = () => {
    return (
            <div className='form-container'>
                <h2 className='form-title'>Fill Up The Form</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="text" name='address' placeholder='Address' required/>
                <input type="number" name="phone" id="" placeholder='Your Phone Number'required/>
                <input type="date" name="Date" id="" placeholder='date' required/>
                <input className='submit-btn fs-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CheckOut;