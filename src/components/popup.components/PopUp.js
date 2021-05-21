import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './popup.styles.css';


export default function Popup() {

    const [showBubble, setShowBubble] = useState(false);

    let history = useHistory();

    const callContactForm = () => {
        history.push('/contact')
    }

    useEffect(() => {
        setTimeout(() => {
            setShowBubble(true)            
        }, 3000);
    }, []);

    if(!showBubble) return null;

    return (
        <div className='popUpInner' data-testid='popup'>
            {/* onClick redirecting to contact page */}
            <p className='speechBubble' onClick={callContactForm}>
              ?
            </p>
            {/* onClick disables speech bubble */}
            <div className='buttonContainer' 
                onClick={() => setShowBubble(false)}>
                x
            </div>
        </div>  
    );
}