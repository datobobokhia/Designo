import './ButtonTypes.css';

function ButtonTypes({ mode }) {
    return (
        <button className={mode === 'dark' ? 'dark' : 'light'}>Learn More</button>
    )
}

export default ButtonTypes;