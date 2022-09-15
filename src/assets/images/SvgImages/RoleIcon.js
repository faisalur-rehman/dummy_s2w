import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RoleIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 0C6.91 0 6.057.42 5.443 1.262c-.613.841-.92 1.917-.92 3.226-.008 1.627.492 2.917 1.5 3.87.129.126.174.289.136.487l-.261.572a1 1 0 0 1-.37.446c-.162.107-.505.26-1.028.458l-1.438.489c-.935.317-1.433.492-1.494.523-.636.278-1.053.568-1.25.87C.106 12.702 0 13.967 0 16h16c0-2.032-.106-3.298-.318-3.798-.197-.301-.614-.59-1.25-.869-.06-.031-.559-.206-1.495-.524l-1.437-.488c-.523-.198-.866-.35-1.028-.458a.999.999 0 0 1-.37-.446l-.261-.572c-.038-.198.007-.36.136-.488 1.008-.952 1.508-2.242 1.5-3.869 0-1.31-.306-2.385-.92-3.226C9.943.42 9.09 0 8 0Z"
      fill="#25BEED"
    />
  </Svg>
)

export default RoleIcon