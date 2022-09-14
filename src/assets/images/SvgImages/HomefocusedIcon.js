import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeFocusedIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.347.128a.533.533 0 0 0-.694 0L0 6.688V14.4A1.6 1.6 0 0 0 1.6 16h4.267a.533.533 0 0 0 .533-.533v-3.2a1.6 1.6 0 1 1 3.2 0v3.2c0 .294.239.533.533.533H14.4a1.6 1.6 0 0 0 1.6-1.6V6.688L8.347.128Z"
      fill="#fff"
    />
  </Svg>
)

export default HomeFocusedIcon
