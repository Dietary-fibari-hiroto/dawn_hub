import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * scroll位置をリセットするためのhook
 * @returns 
 */

const ScrollReset = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return null;
}



export default ScrollReset;