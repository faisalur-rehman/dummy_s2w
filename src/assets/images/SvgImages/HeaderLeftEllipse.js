import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const HeaderLeftEllipse = props => (
  <Svg
    width={27}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={-1} cy={28} r={28} fill="#25BEED" />
  </Svg>
);

export default HeaderLeftEllipse;
