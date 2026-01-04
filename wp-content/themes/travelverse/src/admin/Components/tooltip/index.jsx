import { useState } from 'react'
import { cn } from '../Utils/utils'

export default ({ className, ...props }) => {
    let timeout;
    const [active, setActive] = useState(false)

    let tooltip = 'absolute rounded left-[-25%] py-2 px-3 bg-font-color text-xm z-50 shadow-sm top-[120%] w-max';
    let tooltipBefore = "content-[''] before:absolute before:h-0 before:w-0 before:pointer-events-none before:ml-[calc(6px*-1)] before:border-[6px] before:border-transparent before:bottom-full before:border-b-font-color";

    function showTip() {
        timeout = setTimeout(() => {
            setActive(true)
        }, props.delay || 300)
    }

    function hideTip() {
        clearInterval(timeout);
        setActive(false)
    }

    return (
        <div
            className='relative inline-flex'
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {props.children}
            {active && (
                <div className={cn(`tooltip ${tooltip} ${tooltipBefore} ${props.direction}`, className)}>
                    <p className='text-white max-w-[220px] text-center'>{props.content}</p>
                </div>
            )}
        </div>
    )
}