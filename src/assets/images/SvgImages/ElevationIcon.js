import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ElevationIcon = (props) => (
  <Svg
    width={40}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m40 .583-8.529 2.398 1.518.932-15.9 10.529-5.082-3.293-.992-.641-.978.647L0 17.802l1.981 1.31 9.054-5.996 5.086 3.293.992.642.977-.648L35.043 5.177l1.975 1.213L40 .583Z"
      fill="#D35755"
    />
  </Svg>
)

export default ElevationIcon
