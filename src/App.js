import './App.css';
import MobileHeader from './mobile/MobileHeader';
import BodyFrame from './mobile/BodyFrame';
import BodyDesignProject from './mobile/BodyDesignProject';

function App() {
  return (
    <div className="App">
      <MobileHeader/>
      <BodyFrame/>
      <div className='designPortfolio'>
        <BodyDesignProject design={'web'}/>
        <BodyDesignProject design={'app'}/>
        <BodyDesignProject design={'graphic'}/>
      </div>
    </div>
  );
}

export default App;
