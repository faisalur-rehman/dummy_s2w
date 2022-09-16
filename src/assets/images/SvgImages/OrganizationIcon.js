import * as React from "react"
import Svg, { Path } from "react-native-svg"

const OrganizationIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.222 0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0ZM9.778 12.444H3.556v-1.777h6.222v1.777Zm2.666-3.555H3.556V7.11h8.888V8.89Zm0-3.556H3.556V3.556h8.888v1.777Z"
      fill="#25BEED"
    />
  </Svg>
)

export default OrganizationIcon
