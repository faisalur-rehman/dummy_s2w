import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const LogOutImage = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#FEFEFE" />
    <Path
      d="M16.667 11.667V10A1.667 1.667 0 0 0 15 8.333H9.167A1.667 1.667 0 0 0 7.5 10v10a1.667 1.667 0 0 0 1.667 1.667H15A1.666 1.666 0 0 0 16.667 20v-1.667"
      stroke="#25BEED"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.833 15H22.5L20 12.5m0 5 2.5-2.5"
      stroke="#25BEED"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LogOutImage
