import './App.css';
import MobileHeader from './mobile/MobileHeader';
import BodyFrame from './mobile/BodyFrame';
import BodyDesignProject from './mobile/BodyDesignProject';
import Passionate from './mobile/Passionate';
import Resourceful from './mobile/Resourceful';
import Friendly from './mobile/Friendly';
import Contact from './mobile/FooterContactUs.js';
import FooterFooter from './mobile/FooterFooter.js';

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
      <div className='selfDescription'>
        <Passionate/>
        <Resourceful/>
        <Friendly/>
      </div>
      <div className='footer'>
        <Contact/>
        <FooterFooter/>
      </div>
    </div>
  );
}

export default App;
