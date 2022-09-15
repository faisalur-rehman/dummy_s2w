import * as React from "react"
import Svg, { Circle, Defs, Pattern, Use, Image } from "react-native-svg"
const ProfileHeaderIcon = (props) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Circle cx={36} cy={36} r={36} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="translate(-.252) scale(.00075)" />
      </Pattern>
      <Image
        id="b"
        width={2000}
        height={1330}
      />
    </Defs>
  </Svg>
)
export default ProfileHeaderIcon