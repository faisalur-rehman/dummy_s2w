import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DeleteIcon = (props) => (
  <Svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.5 3a1.5 1.5 0 0 0-3 0h3Zm-4 0a2.5 2.5 0 1 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.485 4.196a5.48 5.48 0 0 0-.986-.176L13.44 4H2.561l1.18 10.23A2 2 0 0 0 5.728 16H7.6c.183.358.404.693.657 1H5.728a3 3 0 0 1-2.98-2.656L1.554 4H.5a.5.5 0 0 1 0-1h5ZM17 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L12.5 12.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146-1.147 1.146a.5.5 0 1 0 .708.708l1.146-1.147 1.146 1.147a.5.5 0 1 0 .708-.708L13.207 13.5l1.147-1.146Z"
      fill="#424242"
    />
  </Svg>
)

export default DeleteIcon
