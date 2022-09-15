import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckBox = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.167.333A5.833 5.833 0 0 0 .333 6.167v11.666a5.833 5.833 0 0 0 5.834 5.834h11.666a5.833 5.833 0 0 0 5.834-5.834V6.167A5.833 5.833 0 0 0 17.833.333H6.167Zm10.185 10.132a1.168 1.168 0 0 0-1.704-1.596l-3.596 3.838-1.777-1.579a1.167 1.167 0 0 0-1.55 1.743l2.625 2.334a1.167 1.167 0 0 0 1.626-.074l4.374-4.666h.002Z"
      fill="#25BEED"
    />
  </Svg>
)

export default CheckBox
