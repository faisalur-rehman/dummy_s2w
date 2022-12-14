import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartRateIcon = props => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.383 3.483-.84-.864C6.567.589 2.948 1.289 1.641 3.84c-.565 1.105-.727 2.663.127 4.63H.504C-1.992 1.788 5.39-1.886 9.177 1.6c.07.064.14.131.206.2a3.66 3.66 0 0 1 .207-.2c3.788-3.487 11.168.187 8.672 6.87h-1.264c.854-1.967.692-3.525.127-4.63-1.307-2.551-4.927-3.252-6.9-1.223l-.842.865ZM2.594 11.99h1.543c1.25 1.388 2.96 2.883 5.246 4.452 2.286-1.569 3.996-3.064 5.247-4.452h1.542c-1.484 1.837-3.683 3.812-6.789 5.865-3.106-2.053-5.305-4.028-6.789-5.865Zm9.68-7.842a.586.586 0 0 0-1.11.058l-1.873 6.56-1.71-4.272a.586.586 0 0 0-1.032-.107L4.377 9.643H.587a.586.586 0 0 0 0 1.173h4.105a.587.587 0 0 0 .488-.261l1.727-2.591 1.932 4.83a.586.586 0 0 0 1.108-.058l1.875-6.56 1.709 4.272a.586.586 0 0 0 .544.368h4.105a.587.587 0 0 0 0-1.173h-3.709l-2.198-5.496Z"
      fill="#D35755"
    />
  </Svg>
);

export default HeartRateIcon;
