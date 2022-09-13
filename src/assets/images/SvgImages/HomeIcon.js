import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={25}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.957 11.315 13.096.463a.842.842 0 0 0-1.192 0L1.044 11.315a1.69 1.69 0 0 0 1.192 2.882H3.38v7.744c0 .467.377.844.843.844h6.59V16.88h2.953v5.906h7.01a.843.843 0 0 0 .845-.844v-7.744h1.144a1.69 1.69 0 0 0 1.192-2.882Z"
      fill="#E53935"
    />
  </Svg>
)

export default HomeIcon
