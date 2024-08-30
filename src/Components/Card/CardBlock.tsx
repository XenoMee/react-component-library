import Card from './Card';
import { HiOutlineCloudUpload } from 'react-icons/hi';

const CardBlock = () => {
  return (
    <div className='grid xxs:gap-10 md:gap-16'>
      <h2 className='h2'>Card</h2>
      <Card
        className='hover:bg-blue-200 hover:scale-110'
        icon={<HiOutlineCloudUpload />}
        iconStyle='bg-blue-600 text-white'
      >
        <h3 className='font-bold text-[#111827]'>Easy Deployment</h3>
        <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
      </Card>
    </div>
  );
};

export default CardBlock;
