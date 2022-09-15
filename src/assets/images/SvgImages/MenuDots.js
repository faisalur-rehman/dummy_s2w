import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const MenuDots = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12.5} fill="#25BEED" />
    <Circle cx={12.5} cy={6.071} r={2.5} fill="#D6F3FC" />
    <Circle cx={12.5} cy={12.5} r={2.5} fill="#D6F3FC" />
    <Circle cx={12.5} cy={18.929} r={2.5} fill="#D6F3FC" />
  </Svg>
)

export default MenuDots
