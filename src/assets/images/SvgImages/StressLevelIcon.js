import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const StressLevelIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={30} height={30} rx={10} fill="#E0E0E0" fillOpacity={0.3} />
    </G>
    <Path
      d="M23.5 15c0 5.298-3.854 9.5-8.5 9.5S6.5 20.298 6.5 15s3.854-9.5 8.5-9.5 8.5 4.202 8.5 9.5Z"
      stroke="#979797"
    />
    <Path
      d="m18.4 9.89-2 2.064 2 1.935M11.4 9.89l2 2.064-2 1.935"
      stroke="#979797"
    />
    <Rect x={10.5} y={18.166} width={8.8} height={2} rx={1} stroke="#979797" />
    <Defs></Defs>
  </Svg>
)

export default StressLevelIcon
