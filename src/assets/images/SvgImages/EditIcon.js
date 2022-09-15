import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditIcon = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13.474 3.408 2.118 2.117-2.118-2.117Zm1.362-1.865L9.109 7.27a2.118 2.118 0 0 0-.58 1.082L8 11l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.854 1.854 0 0 0-2.621-2.621v0Z"
      stroke="#424242"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 13v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"
      stroke="#424242"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default EditIcon
