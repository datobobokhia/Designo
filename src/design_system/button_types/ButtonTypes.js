import './ButtonTypes.css';

function buttonTypes({ name }) {
    const buttonMode = {
        dark: 'dark',
        light: 'light'
    }
    return (
        <button className={name === buttonMode.dark ? buttonMode.dark : buttonMode.light}>Learn More</button>
    )
}

export default buttonTypes;