import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIcon = (props) => (
  <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M10.149 4.429a3.43 3.43 0 0 1-3.431 3.428 3.43 3.43 0 1 1 0-6.857 3.43 3.43 0 0 1 3.43 3.429ZM12.436 17H1v-2.284a3.43 3.43 0 0 1 3.43-3.43h4.575a3.43 3.43 0 0 1 3.431 3.43V17Z"
      stroke="#B2B2B2"
      strokeWidth={1.3}
      strokeLinecap="square"
    />
  </Svg>
)

export default ProfileIcon
