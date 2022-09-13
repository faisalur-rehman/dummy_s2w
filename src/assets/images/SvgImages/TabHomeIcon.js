import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TabHomeIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m9 1 .39-.456a.6.6 0 0 0-.78 0L9 1ZM1 7.857l-.39-.455-.21.18v.275H1ZM6.714 17v.6a.6.6 0 0 0 .6-.6h-.6Zm4.572 0h-.6a.6.6 0 0 0 .6.6V17ZM17 7.857h.6v-.276l-.21-.18-.39.456ZM2.143 17.6h4.571v-1.2H2.143v1.2ZM17.39 7.402l-8-6.858-.78.912 8 6.857.78-.911ZM8.61.544l-8 6.858.78.91 8-6.856-.78-.912ZM7.314 17v-3.429h-1.2V17h1.2Zm3.372-3.429V17h1.2v-3.429h-1.2Zm.6 4.029h4.571v-1.2h-4.571v1.2Zm6.314-1.743v-8h-1.2v8h1.2Zm-17.2-8v8h1.2v-8H.4ZM9 11.886c.931 0 1.686.754 1.686 1.685h1.2A2.886 2.886 0 0 0 9 10.686v1.2Zm0-1.2a2.886 2.886 0 0 0-2.886 2.885h1.2c0-.93.755-1.685 1.686-1.685v-1.2Zm6.857 6.914c.963 0 1.743-.78 1.743-1.743h-1.2c0 .3-.243.543-.543.543v1.2ZM2.143 16.4a.543.543 0 0 1-.543-.543H.4c0 .963.78 1.743 1.743 1.743v-1.2Z"
      fill="#B2B2B2"
    />
  </Svg>
)

export default TabHomeIcon
