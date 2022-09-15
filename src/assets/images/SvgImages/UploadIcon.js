import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UploadIcon = (props) => (
  <Svg
    width={15}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.333 0H1.667C.75 0 0 .85 0 1.889V15.11C0 16.15.75 17 1.667 17h11.666C14.25 17 15 16.15 15 15.111V1.89C15 .85 14.25 0 13.333 0ZM9.167 13.222H3.333v-1.889h5.834v1.89Zm2.5-3.778H3.333V7.556h8.334v1.888Zm0-3.777H3.333v-1.89h8.334v1.89Z"
      fill="#25BEED"
    />
  </Svg>
)

export default UploadIcon
