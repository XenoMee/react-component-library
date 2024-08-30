import React from 'react';
import Testimonial from './Testimonial';

const TestimonialBlock = () => {
  return (
    <div className='grid xxs:gap-28 sm:gap-14 md:gap-20 xl:gap-24'>
      <h2 className='h2'>Testimonial</h2>
      <Testimonial
        src='./images/May_Anderson_Mobile.png'
        alt='May Anderson'
        accentColor='blue-700'
        name='May Anderson'
        company='Workcation'
        job='CTO'
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est
          integer dolor auctor adipiscing nunc urna, sit.
        </p>
      </Testimonial>
    </div>
  );
};

export default TestimonialBlock;
