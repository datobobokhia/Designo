import './SelfDescriptionPassResFrie.css';
import FriendlyImage from './photo_assets/image-friendly.png';

function Friendly() {
    return (
        <div className='selfDescriprion'>
            <img
            src={FriendlyImage}
            alt='Friendly folks'
            />
            <div className='selfTextDescription'>
                <div className='descriptionHeadline'>FRIENDLY</div>
                <div className='descriptionParagraph'>
                We are a group of enthusiastic folks 
                who know how to put people first. 
                Our success depends on our customers, 
                and we strive to give them the best 
                experience a company can provide.
                </div>
            </div>
        </div>
    )
}

export default Friendly;