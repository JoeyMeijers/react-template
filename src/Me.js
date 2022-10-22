import headshot from './headshot.jpg';
import './Me.css';

function Me() {
    return (
        <div>
            <h1>Joey is a Douche</h1>     
            <img className='headshot' src={headshot} alt="headshot"/>
            <h3>
                He will never be cool.
                <br/>
                Not with that face.
            </h3>
        </div>
    )
}

export default Me;
