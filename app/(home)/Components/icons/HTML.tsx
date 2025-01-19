import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={800}
        height={800}
        viewBox="0 0 512 512"
        {...props}
    >
        <path d="M30.713.501 71.717 460.42l184.006 51.078 184.515-51.15L481.287.501H30.713zm365.041 109.145-2.567 28.596-1.128 12.681H176.204l5.155 57.761h205.565l-1.377 15.146-13.255 148.506-.849 9.523L256 413.854v.012l-.259.072-115.547-32.078-7.903-88.566H188.915l4.016 44.986 62.82 16.965.052-.014v-.006l62.916-16.977 6.542-73.158h-195.49l-13.863-155.444-1.351-15.131h282.547l-1.35 15.131z" />
    </svg>
)
export default SvgComponent
