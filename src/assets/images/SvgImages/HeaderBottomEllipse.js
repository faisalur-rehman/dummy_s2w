import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const HeaderBottomEllipse = (props) => (
  <Svg
    width={39}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={11} cy={28} r={28} fill="#25BEED" />
  </Svg>
)

export default HeaderBottomEllipse
