import React, { FC } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import capitalizeWord from '../../Utilities/capitalizeWord';
import { CgFormatSlash } from 'react-icons/cg';

interface TestimonialProps {
  src?: string;
  alt?: string;
  icon?: string;
  children: React.ReactNode;
  name: string;
  company: string;
  job: string;
  accentColor?: string;
}

const Testimonial: FC<TestimonialProps> = ({ src, alt, icon, accentColor, children, name, company, job }) => {
  return (
    <blockquote
      className={`max-w-[70rem] grid ${
        !src
          ? 'gap-8 py-16 ss:text-center text-[#111827] bg-white'
          : `bg-blue-700 text-white sm:grid-cols-[.5fr_1fr] sm:gap-40`
      } p-4 rounded-lg shadow-md font-medium relative`}
    >
      {src ? (
        <picture className='xxs:justify-self-center max-sm:-translate-y-20 sm:scale-[1.4] sm:translate-x-20 sm:translate-y-4'>
          <source srcSet='./images/May_Anderson_Desktop.png' media='(min-width:850px)' />
          <img src={`${src}`} alt={`${alt}`} className='rounded-lg ' />
        </picture>
      ) : (
        <div className='flex items-center gap-4 justify-self-center'>
          <img src={`${icon}`} alt='' />
          <h3 className='font-bold'>
            {capitalizeWord(company.slice(0, 4))}
            <span className={`${accentColor}`}>{company.slice(4)}</span>
          </h3>
        </div>
      )}

      <div className={`grid gap-8 self-center ${src ? 'max-sm:-translate-y-14' : ''}`}>
        {src && <BiSolidQuoteAltLeft className='w-12 h-12 opacity-30' />}
        <div>{children}</div>
        <div
          className={`flex xxs:flex-col justify-self-start ${
            !src ? 'ss:flex-row ss:items-center ss:justify-self-center' : ''
          }`}
        >
          <p>{name}</p>
          {!src && <CgFormatSlash className={`hidden ss:inline-block w-6 h-6 ${accentColor}`} />}
          <p className={`${!src ? 'text-[#6B7280]' : ''}`}>
            {capitalizeWord(company)}, {job}
          </p>
        </div>
      </div>
    </blockquote>
  );
};

export default Testimonial;
