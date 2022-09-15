import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CancelIcon = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.001 6 5.243 5.243m-10.486 0L6.001 6 .758 11.243ZM11.244.757 6 6 11.244.757ZM6 6 .758.757 6 6Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CancelIcon

