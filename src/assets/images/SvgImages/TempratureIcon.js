import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TempratureIcon = (props) => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.318 1a1.54 1.54 0 0 0-1.54 1.54v6.55h3.08V2.54A1.54 1.54 0 0 0 5.318 1Z"
      fill="#fff"
    />
    <Path
      d="M6.76 13.484a3.117 3.117 0 1 1-2.86-.005V8.12s2.515.443 2.856-.289l.005 5.652Z"
      fill="#EA5A47"
    />
    <Path
      d="M8.704 2.838a.98.98 0 0 0-.883 1.048L7.5 6.71l-.36.748c0 .078.182.124.226.098l1.67-.475a.147.147 0 0 1 .132-.052h6.12a.98.98 0 0 0 .884-1.048V3.886a.98.98 0 0 0-.883-1.048H8.704Z"
      fill="#fff"
    />
    <Path
      d="M5.621 8.355a3.413 3.413 0 0 0 1.272-.351l.006 5.336c0 .158.053.312.152.436.614.757 1.205 1.477 1.205 2.577A2.877 2.877 0 0 1 5.3 19.197s2.863-2.156.48-4.7a.86.86 0 0 1-.157-.504L5.62 8.355Z"
      fill="#D22F27"
    />
    <Path
      d="M5.758 10.2c-.318.057-.64.082-.963.076-.634 0-1.148-.074-1.148-.165m2.111 2.272c-.318.056-.64.08-.963.075-.634 0-1.148-.074-1.148-.165m1.821-4.23a5.245 5.245 0 0 1-.91.028c-.635 0-.91-.07-.91-.162m2.11-2.092c-.318.056-.64.082-.963.076-.634 0-1.148-.074-1.148-.165"
      stroke="#000"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.528 9.09v4.317a.864.864 0 0 0 .368.638 2.88 2.88 0 1 1-4.419 1.025"
      stroke="#000"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.285 14.041a.838.838 0 0 0 .362-.633V2.47a1.44 1.44 0 0 1 2.88 0l.005 3.36"
      stroke="#000"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.758 3.656c-.318.056-.64.08-.963.075-.634 0-1.148-.074-1.148-.165"
      stroke="#000"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.46 2.838a.979.979 0 0 0-.884 1.048L7.37 6.56l-.925 1.399a.09.09 0 0 0 .059.135S8.88 7.03 8.924 7.03h6.12a.98.98 0 0 0 .884-1.048V3.886a.98.98 0 0 0-.883-1.048H8.46Z"
      stroke="#000"
      strokeMiterlimit={10}
    />
  </Svg>
)

export default TempratureIcon
