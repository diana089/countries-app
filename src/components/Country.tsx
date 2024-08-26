import image from '../assets/react.svg';
import './Country.css';

export const Country = () => {

    return(
        <div className="country-card">
            <img className="flag" src = { image }/>
            <div className="description">
                <p>p</p>
                <p>p</p>
                <p>p</p>
            </div>
        </div>
    )
}