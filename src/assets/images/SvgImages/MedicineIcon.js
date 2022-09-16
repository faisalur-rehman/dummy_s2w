import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const MedicineIcon = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12.5} cy={12.5} r={12.5} fill="#25BEED" />
    <G clipPath="url(#a)">
      <Path
        d="M16.438 6H8.563A.564.564 0 0 0 8 6.563v1.125c0 .309.253.562.563.562h7.874c.31 0 .563-.253.563-.563V6.563A.564.564 0 0 0 16.437 6ZM8.75 17.25c0 .413.338.75.75.75h6c.412 0 .75-.337.75-.75V9h-7.5v8.25Zm1.5-4.313c0-.103.084-.187.188-.187h1.312v-1.313c0-.103.084-.187.188-.187h1.124c.104 0 .188.084.188.188v1.312h1.313c.103 0 .187.084.187.188v1.124a.188.188 0 0 1-.188.188H13.25v1.313a.188.188 0 0 1-.188.187h-1.124a.188.188 0 0 1-.188-.188V14.25h-1.313a.188.188 0 0 1-.187-.188v-1.124Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(8 6)" d="M0 0h9v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MedicineIcon;
