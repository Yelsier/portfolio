import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="#000"
            d="M5.14 4.726A2.5 2.5 0 1 0 3 4.792v6.416a2.5 2.5 0 1 0 2 0V7.414L7.086 9.5h2.622a2.5 2.5 0 1 0 0-2H7.914L5.14 4.726Z"
        />
    </svg>
)
export default SvgComponent
