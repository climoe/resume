import {SVGAttributes} from "react";

const LoaderIcon = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            { ...props }>

            <path fill="none" className="path" stroke-width="3" d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"/>

            <circle r="3" className="circle">
                <animateMotion dur="2s" repeatCount="indefinite"
                    path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
            </circle>
        </svg>
    )
}

export default LoaderIcon;