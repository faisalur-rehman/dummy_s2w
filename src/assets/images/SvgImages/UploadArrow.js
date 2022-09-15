import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UploadArrow = (props) => (
  <Svg
    width={32}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 18.8a1 1 0 0 1 1 1v5a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-5a1 1 0 0 1 2 0v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-5a1 1 0 0 1 1-1Z"
      fill="#979797"
    />
    <Path
      d="M15.292 1.292a1 1 0 0 1 1.416 0l6 6a1.001 1.001 0 1 1-1.416 1.416L17 4.414V22a1 1 0 1 1-2 0V4.414l-4.292 4.294a1 1 0 1 1-1.416-1.416l6-6Z"
      fill="#979797"
    />
  </Svg>
)

export default UploadArrow
