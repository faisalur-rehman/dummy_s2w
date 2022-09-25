import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const ProfileEdit = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={13} cy={13} r={13} fill="#25BEED" />
    <Path
      d="m16.273 7.983 1.744 1.743-1.744-1.743Zm1.122-1.536-4.717 4.716c-.244.244-.41.554-.478.892l-.435 2.18 2.18-.436c.338-.068.648-.233.892-.477l4.716-4.716a1.527 1.527 0 0 0-2.159-2.159v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.353 15.882v2.47A1.647 1.647 0 0 1 16.706 20H7.647A1.647 1.647 0 0 1 6 18.353V9.294a1.647 1.647 0 0 1 1.647-1.647h2.47"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ProfileEdit
