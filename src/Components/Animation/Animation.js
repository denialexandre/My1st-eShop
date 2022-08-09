import { useState, useEffect, useRef } from "react"

// const useMyRef = (initialValue) => useState({ current: initialValue })[0]

    const Animation = () => {
    const [background, setBackground] = useState('blue')
    const divRef = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            // console.log('You have scrolled')
        const div = divRef.current
            console.log(div)
        // const div = document.getElementById('scroll-color')
        // console.log(div.getBoundingClientRect())
        const { y } = div.getBoundingClientRect()
        const backgroundColor = y <= 0 ? 'green' : 'blue'
            setBackground(backgroundColor)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div>
            <div 
                ref={divRef}
                // id='scroll-color' 
                style={{ background, height: '180vh'}}>
                <h1>Scroll down to change colour!</h1>
                {/* React.createElement('button', { onClick: () => console.log('hice click)}) */}
            </div>
        </div>
    )
}

export default Animation