import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const OxygenSaturationIcon = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.038 6.815h.938v-.938h-2.815v.938h.938v.939h-1.018a1.408 1.408 0 1 0 0 .938H13.1v.977a2.816 2.816 0 0 0-2.346 2.776v11.73a.47.47 0 0 0 .47.469h4.691a.469.469 0 0 0 .47-.47V12.445a2.816 2.816 0 0 0-2.346-2.776v-.977h2.346v-.938h-2.346v-.939Zm-.47 3.754a1.877 1.877 0 0 0-1.876 1.876v.939h3.753v-.939a1.877 1.877 0 0 0-1.877-1.876Zm-1.876 13.136v-9.383h3.753v9.383h-3.753ZM10.284 8.223a.47.47 0 1 1 .939 0 .47.47 0 0 1-.939 0Zm7.976 5.63a1.877 1.877 0 0 1 3.753 0v2.815a1.876 1.876 0 1 1-3.753 0v-2.815Zm1.877-.938a.938.938 0 0 0-.939.938v2.815a.938.938 0 1 0 1.877 0v-2.815a.938.938 0 0 0-.938-.938Zm3.753 3.284h-1.407v-.939h1.407a1.407 1.407 0 1 1 0 2.815.47.47 0 0 0-.469.47v.469h1.877v.938h-2.346a.47.47 0 0 1-.47-.47v-.938a1.407 1.407 0 0 1 1.408-1.407.47.47 0 1 0 0-.938Z"
      fill="#979797"
    />
    <Defs></Defs>
  </Svg>
)

export default OxygenSaturationIcon
