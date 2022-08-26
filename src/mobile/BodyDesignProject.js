import './BodyDesignProject.css';
import WebDesignImage from './photo_assets/image-web-design.jpg';
import AppDesignImage from './photo_assets/image-app-design.jpg';
import GraphicDesignImage from './photo_assets/image-graphic-design.jpg';
import RightArrowIcon from './photo_assets/icon-right-arrow.svg';

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
                <div className={design === 'graphic' ? 'designTypeGraph' : 'designType'}>
                    {design === 'web' ? 'WEB DESIGN'
                    : design === 'app' ? 'APP DESIGN'
                    : 'GRAPHIC DESIGN'}
                </div>
                <div className='linkText'>
                    VIEW PROJECTS
                    <img 
                    src={RightArrowIcon}
                    alt='Arrow Icon'
                    className='arrowIcon'
                    />
                </div>
            </div>
        </div>
    )
}

export default WebDesign;