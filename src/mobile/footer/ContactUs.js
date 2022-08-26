import './ContactUs.css';
import ButtonTypes from '/Users/David/OneDrive/Desktop/Designo/designo/src/design_system/button_types/ButtonTypes.js';

function Contact() {
    return (
        <div className='contact'>
            <div className='content'>
                <div className='contentText'>
                    <div className='contentHeader'>
                        Let’s talk about your project
                    </div>
                    <div className='contentParagraph'>
                    Ready to take it to the next level? 
                    Contact us today and find out how 
                    our expertise can help your business grow.
                    </div>
                </div>
                <ButtonTypes mode={'dark'}/>
            </div>
        </div>
    )
}

export default Contact;