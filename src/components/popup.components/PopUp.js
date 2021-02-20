import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './popup.styles.css';


export default function Popup() {
    const [visible, setVisible] = useState(true);

    let history = useHistory();

    const callContactForm = () => {
        history.push('/contact')
    }

    // useEffect(()=>{
    //   let pop_status = localStorage.getItem('pop_status');
    //   if(!pop_status){
    //     setVisible(true);
    //     localStorage.setItem('pop_status', 30);
    //   }
    // },[])

    if(!visible) return null;

    return (
        <div className='popUp' >
            <div className='popUpInner'>
                {/* onClick redirecting to contact page */}
                <p className='speechBubble' onClick={callContactForm}>
                  ?
                </p>
                {/* onClick disables speech bubble */}
                <div className='buttonContainer' onClick={() => setVisible(false)}>
                    x
                </div>
            </div>   
        </div>
    )
}