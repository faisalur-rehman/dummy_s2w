import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NotificationIcon = (props) => (
  <Svg
    width={15}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 12.429h14.857m-13.143 0V6.714a5.714 5.714 0 1 1 11.429 0v5.715m-8 1.714v.571a2.286 2.286 0 1 0 4.571 0v-.571"
      stroke="#B2B2B2"
      strokeWidth={1.2}
    />
  </Svg>
)

export default NotificationIcon
