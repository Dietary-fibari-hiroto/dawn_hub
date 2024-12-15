import { useEffect, useRef, useState } from "react"

const ScrollEventFlow = (className) => {
    const [position, setPositions] = useState([]);
    const [scrollY, setScrollY] = useState(0);
    const [animatePositionY, setAnimatePositionY] = ([]);


    const styleSetting = {
        transition: `transform 1s ease-in-out`
    }

    const eventIgnitionValue = 0.05;//アニメーションが発火するタイミング

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    //初期実行処理
    useEffect(() => {
        const elements = document.querySelectorAll(".event-Flow")
        const positionsArray = Array.from(elements).map((element) => {
            return Math.floor(element.getBoundingClientRect().top)
        })
    })

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
}

export default ScrollEventFlow;