import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";


export default function Popup() {
    const [visible, setVisible] = React.useState(false);
    useEffect(()=>{
      let pop_status = localStorage.getItem('pop_status');
      if(!pop_status){
        setVisible(true);
        localStorage.setItem('pop_status',10);
      }
    },[])
    if(!visible) return null;

    return (
        <div className='popUp' onClick={() => setVisible(false)}>
            <div className='popUpInner'>
                <p>
                    How can we help you?
                </p>
                <div className='buttonContainer'>
                    <Button color="danger" className='button'>Okay</Button>
                </div>
            </div>   
        </div>
    )
}