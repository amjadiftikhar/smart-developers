import React, { useState, useEffect } from 'react';
import {useWindowScroll} from "react-use";
import {FaArrowUp} from "react-icons/fa";
import "./scroll.styles.css";

function ScrollToTop() {
    const {y: pageYOffSet} = useWindowScroll();
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        if(pageYOffSet > 400) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [pageYOffSet])

    if(!visibility) {
        return false;
    }

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth' })

    return (
        <div className="scrollToTop cursorPointer text-center"
            onClick={scrollTop} data-testid='scrollToTop'>
            <FaArrowUp className="icon"/>
        </div>
    )
}

export default ScrollToTop
