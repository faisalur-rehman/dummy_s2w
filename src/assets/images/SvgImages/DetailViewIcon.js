import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const DetailViewIcon = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12.5} cy={12.5} r={12.5} fill="#25BEED" />
    <Path
      d="M12.5 14.375a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
      fill="#fff"
    />
    <Path
      d="M19.503 12.34A7.824 7.824 0 0 0 12.5 7.345a7.824 7.824 0 0 0-7.003 4.997.469.469 0 0 0 0 .318 7.823 7.823 0 0 0 7.003 4.997 7.823 7.823 0 0 0 7.003-4.997.47.47 0 0 0 0-.318ZM12.5 15.548a3.047 3.047 0 1 1 0-6.093 3.047 3.047 0 0 1 0 6.093Z"
      fill="#fff"
    />
  </Svg>
);

export default DetailViewIcon;
