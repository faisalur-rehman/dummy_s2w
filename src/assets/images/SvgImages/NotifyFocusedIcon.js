import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NotifyFocusedIcon = (props) => (
  <Svg
    width={14}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.933 0a5.867 5.867 0 0 0-5.866 5.867v4.8H0v1.066h13.867v-1.066H12.8v-4.8A5.867 5.867 0 0 0 6.933 0ZM4.267 13.333V12.8H9.6v.533a2.667 2.667 0 1 1-5.333 0Z"
      fill="#fff"
    />
  </Svg>
)

export default NotifyFocusedIcon
