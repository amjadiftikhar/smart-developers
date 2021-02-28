import React, { useState, useEffect } from 'react';
import {useWindowScroll} from "react-use";
import {FaArrowDown} from "react-icons/fa";
import "./scroll.styles.css";

function ScrollToDown() {
    const {y: pageYOffSet} = useWindowScroll();
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        if(pageYOffSet < 400) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [pageYOffSet])

    if(!visibility) {
        return false;
    }

    const scrollDown = () => window.scrollTo({top: 600, behavior: 'smooth' })

    return (
        <div className="scrollToDown cursorPointer text-center" onClick={scrollDown} data-testid='scrollToDown'>
            <FaArrowDown className="iconDown"/>
        </div>
    )
}

export default ScrollToDown
