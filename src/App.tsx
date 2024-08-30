import BadgesBlock from './Components/Badge/BadgesBlock';
import BannerBlock from './Components/Banner/BannersBlock';
import CardBlock from './Components/Card/CardBlock';

const App = () => {
  return (
    <main className='container grid gap-20 justify-center'>
      <h1 className='h1'>React Component Library</h1>
      <div className='grid gap-20'>
        <BadgesBlock />
        <BannerBlock />
        <CardBlock />
      </div>
    </main>
  );
};

export default App;
