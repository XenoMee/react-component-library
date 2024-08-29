import Banner from './Banner';
import capitalizeWord from '../Utilities/capitalizeWord';

type Variant = 'success' | 'warning' | 'error' | 'neutral';

const BannersBlock = () => {
  const variants: Variant[] = ['success', 'warning', 'error', 'neutral'];

  const renderBannerTitle = (modifier: Variant) => {
    switch (modifier) {
      case 'success':
        return 'Congratulations!';
        break;

      case 'warning':
        return 'Attention!';
        break;

      case 'error':
        return 'There is a problem with your application.';
        break;

      case 'neutral':
        return 'Update available';
        break;
    }
  };

  return (
    <div className='grid xxs:gap-6 md:gap-12'>
      <h2 className='h2'>Banners</h2>
      {variants.map((variant) => {
        return (
          <div key={variant} className='grid grid-cols-[.15fr_1fr] gap-10 items-center'>
            <h3 className='h3 justify-self-end'>{capitalizeWord(variant)}</h3>
            <Banner variant={`${variant}`}>
              <h4>{renderBannerTitle(variant)}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </Banner>
          </div>
        );
      })}
    </div>
  );
};

export default BannersBlock;
