import './BodyDesignProject.css';
import WebDesignImage from './image-web-design.jpg';
import AppDesignImage from './image-app-design.jpg';
import GraphicDesignImage from './image-graphic-design.jpg';

function WebDesign({design}) {
    return (
        <div className='webDesign'>
            <img
            src={design === 'web' ? WebDesignImage
            : design=== 'app' ? AppDesignImage
            : GraphicDesignImage}
            alt ='Design'
            className='designImage'
            />
            <div className={design === 'web' ? 'innerTextWeb'
                    : design=== 'app' ? 'innerTextApp'
                    : 'innerTextGraphic'}>
                <div className='designType'>
                    {design === 'web' ? <p>WEB DESIGN</p>
                    : design=== 'app' ? <p>APP DESIGN</p>
                    : <p>GRAPHIC DESIGN</p>}
                </div>
                <div className='linkText'>
                    VIEW PROJECTS
                    <img alt=''/>
                </div>
            </div>
        </div>
    )
}

export default WebDesign;