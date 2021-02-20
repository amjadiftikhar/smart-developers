import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
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
    }, [])

    // Aos.init({duration: 2000});
    // useEffect(()=>{
    //   let pop_status = localStorage.getItem('pop_status');
    //   if(!pop_status){
    //     setVisible(true);
    //     localStorage.setItem('pop_status', 30);
    //   }
    // },[])

    if(!showBubble) return null;

    return (
        <div className='popUpInner'data-aos='fade-up'>
            {/* onClick redirecting to contact page */}
            <p className='speechBubble' onClick={callContactForm}>
              ?
            </p>
            {/* onClick disables speech bubble */}
            <div className='buttonContainer' onClick={() => setShowBubble(false)}>
                x
            </div>
        </div>  
    )
}