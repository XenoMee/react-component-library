import Badge from './Badge';
import capitalizeWord from '../Utilities/capitalizeWord';

type BadgeShape = 'square' | 'pill';

const BadgesBlock = () => {
  const colors: string[] = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

  const badgeTypes: Record<BadgeShape, string[]> = {
    square: colors,
    pill: colors,
  };

  return (
    <div className='grid xxs:gap-6 md:gap-12'>
      <h2 className='h2'>Badges</h2>
      <div className='grid md:gap-4 xxs:gap-10'>
        {Object.entries(badgeTypes).map(([type, colors], index) => {
          return (
            <div key={index} className='flex-container'>
              <h3 className='h3'>{capitalizeWord(type)}:</h3>
              <div className='flex-item'>
                {colors.map((color) => {
                  return (
                    <Badge key={color} shape={`${type as BadgeShape}`} color={`${color}`}>
                      Badge
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgesBlock;
