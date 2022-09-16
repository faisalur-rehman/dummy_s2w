import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MobileIcon = (props) => (
  <Svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.692 0H2.308c-.612 0-1.2.192-1.632.533C.243.873 0 1.336 0 1.818v12.364c0 .482.243.944.676 1.285.433.341 1.02.533 1.632.533h7.384c.612 0 1.2-.192 1.632-.533.433-.34.676-.803.676-1.285V1.818c0-.482-.243-.944-.676-1.285C10.891.192 10.304 0 9.692 0ZM6 15.273c-.766 0-1.385-.487-1.385-1.091S5.234 13.09 6 13.09s1.385.487 1.385 1.09c0 .605-.619 1.092-1.385 1.092Zm4.154-2.91H1.846V2.183h8.308v10.182Z"
      fill="#25BEED"
    />
  </Svg>
)

export default MobileIcon
