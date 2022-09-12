import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HiddenEye = props => (
  <Svg
    width={20}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.162 0C6.616 0 3.401 2.104 1.028 5.522a.852.852 0 0 0 0 .952C3.401 9.896 6.616 12 10.162 12c3.546 0 6.761-2.104 9.134-5.522a.852.852 0 0 0 0-.952C16.923 2.104 13.708 0 10.162 0Zm.254 10.225c-2.353.16-4.297-1.944-4.149-4.5.121-2.11 1.697-3.818 3.64-3.95 2.354-.16 4.298 1.944 4.15 4.5-.125 2.105-1.7 3.814-3.64 3.95ZM10.3 8.273C9.03 8.36 7.983 7.227 8.066 5.852c.065-1.137.915-2.055 1.963-2.13 1.268-.086 2.316 1.047 2.232 2.422-.068 1.14-.918 2.06-1.962 2.13Z"
      fill="#000"
    />
  </Svg>
);

export default HiddenEye;