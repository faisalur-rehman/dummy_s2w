import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileFocusedIcon = (props) => (
  <Svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.87 0a3.734 3.734 0 1 0 0 7.467A3.734 3.734 0 1 0 5.87 0ZM3.736 9.6A3.735 3.735 0 0 0 0 13.335V16h11.74v-2.665A3.735 3.735 0 0 0 8.006 9.6h-4.27Z"
      fill="#fff"
    />
  </Svg>
)

export default ProfileFocusedIcon
