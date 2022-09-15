import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PdfFileImage = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26.25 15.75V14H21v8.75h1.75v-3.5h2.625V17.5H22.75v-1.75h3.5Zm-9.625 7h-3.5V14h3.5a2.628 2.628 0 0 1 2.625 2.625v3.5a2.628 2.628 0 0 1-2.625 2.625ZM14.875 21h1.75a.876.876 0 0 0 .875-.875v-3.5a.876.876 0 0 0-.875-.875h-1.75V21Zm-5.25-7H5.25v8.75H7v-2.625h2.625a1.753 1.753 0 0 0 1.75-1.75V15.75A1.752 1.752 0 0 0 9.625 14ZM7 18.375V15.75h2.625v2.625H7Z"
      fill="#000"
    />
    <Path
      d="M19.25 12.25v-3.5a.796.796 0 0 0-.262-.613l-6.125-6.125a.795.795 0 0 0-.613-.262H3.5A1.755 1.755 0 0 0 1.75 3.5v21a1.75 1.75 0 0 0 1.75 1.75h14V24.5h-14v-21h7v5.25a1.755 1.755 0 0 0 1.75 1.75h5.25v1.75h1.75Zm-7-3.5v-4.9l4.9 4.9h-4.9Z"
      fill="#000"
    />
  </Svg>
)

export default PdfFileImage
