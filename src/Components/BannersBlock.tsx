import Banner from './Banner';
import capitalizeWord from '../Utilities/capitalizeWord';

type Variant = 'success' | 'warning' | 'error' | 'neutral';

const BannersBlock = () => {
  const variants: Variant[] = ['success', 'warning', 'error', 'neutral'];
  const bannerTitles: Record<Variant, string> = {
    success: 'Congratulations!',
    warning: 'Attention!',
    error: 'There is a problem with your application.',
    neutral: 'Update available',
  };

  return (
    <div className='grid xxs:gap-6 md:gap-12'>
      <h2 className='h2'>Banners</h2>
      {variants.map((variant) => {
        return (
          <div key={variant} className='grid grid-cols-[.15fr_1fr] gap-10 items-center'>
            <h3 className='h3 justify-self-end'>{capitalizeWord(variant)}</h3>
            <Banner variant={`${variant}`}>
              <h4 className='leading-tight font-semibold'>{bannerTitles[variant]}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </Banner>
          </div>
        );
      })}
    </div>
  );
};

export default BannersBlock;
