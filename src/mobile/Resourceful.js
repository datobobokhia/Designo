import './SelfDescriptionPassResFrie.css';
import ResourcefulImage from './photo_assets/image-resourceful.png';

function Resourceful() {
    return (
        <div className='selfDescriprion'>
            <img
            src={ResourcefulImage}
            alt='Resourceful guy'
            />
            <div className='selfTextDescription'>
                <div className='descriptionHeadline'>RESOURCEFUL</div>
                <div className='descriptionParagraph'>
                Everything that we do has a strategic purpose. 
                We use an agile approach in all of our projects 
                and value customer collaboration. It guarantees 
                superior results that fulfill our clients’ needs.
                </div>
            </div>
        </div>
    )
}

export default Resourceful;