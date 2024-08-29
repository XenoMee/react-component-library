import Badge from './Badge';

const BadgesBlock = () => {
  const colors: string[] = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

  const badgeTypes = {
    square: colors,
    pill: colors,
  };

  return (
    <div className='grid gap-10'>
      <h2 className='h2'>Badges</h2>
      <div className='grid gap-4'>
        {Object.entries(badgeTypes).map(([type, colors], index) => {
          return (
            <div key={index} className='flex gap-10 items-center'>
              <h3 className='h3'>{type.toUpperCase()}:</h3>
              <div className='flex gap-4 items-center'>
                {colors.map((color) => {
                  return (
                    <Badge key={color} shape='pill' color={`${color}`}>
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
