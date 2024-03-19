import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';
import { ISvgProps } from '@types/ISvgProps';
import { theme } from '@theme/theme';

const { color } = theme.components;

function HomeIcon(props: ISvgProps) {
  const { filled } = props;

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      //   {...props}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9zm-2 2V9l8-6 8 6v12h-7v-6h-2v6H4z"
          fill={filled || '#000'}
        />
      </G>
    </Svg>
  );
}

export default HomeIcon;
