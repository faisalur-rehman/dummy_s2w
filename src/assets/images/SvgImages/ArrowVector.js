import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowVector = (props) => (
  <Svg
    width={15}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.625 5h7.412L5.77 7.725a.626.626 0 1 0 .962.8l3.125-3.75a.744.744 0 0 0 .056-.094c0-.031.032-.05.044-.081A.625.625 0 0 0 10 4.375a.625.625 0 0 0-.044-.225c0-.031-.031-.05-.043-.081a.744.744 0 0 0-.057-.094L6.731.225a.625.625 0 0 0-.962.8L8.037 3.75H.625a.625.625 0 0 0 0 1.25Z"
      fill="#fff"
    />
  </Svg>
)

export default ArrowVector
