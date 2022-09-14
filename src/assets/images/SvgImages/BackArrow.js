import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrow = props => (
  <Svg
    width={21}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.268 7.008a1 1 0 0 0 .05 1.413l6.591 6.13a1 1 0 0 0 1.362-1.465L2.413 7.638 7.861 1.78A1 1 0 0 0 6.397.418l-6.13 6.59Zm19.696-1.007-19 .689.072 1.998 19-.689-.072-1.998Z"
      fill="#000"
    />
  </Svg>
);

export default BackArrow;
