import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeaderRightEllipse = props => (
  <Svg
    width={115}
    height={109}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M130 43.5c0 36.175-29.101 65.5-65 65.5-35.898 0-65-29.325-65-65.5S29.102-22 65-22c35.899 0 65 29.325 65 65.5Z"
      fill="#25BEED"
    />
  </Svg>
);

export default HeaderRightEllipse;
