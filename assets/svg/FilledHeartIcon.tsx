import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import { ISvgProps } from '@types/ISvgProps';

function FilledHeartIcon(props: ISvgProps) {
  const { filled, width, height } = props;
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
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
          d="M12 21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925-1.1-1.1-1.975-2.088-2.625-2.963-.65-.874-1.104-1.679-1.362-2.412A6.726 6.726 0 012 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65a5.77 5.77 0 012.475.55A5.93 5.93 0 0112 4.75a5.93 5.93 0 012.025-1.55 5.769 5.769 0 012.475-.55c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 .767-.13 1.517-.387 2.25-.259.733-.713 1.537-1.363 2.412-.65.876-1.525 1.863-2.625 2.963s-2.492 2.408-4.175 3.925L12 21z"
          fill={filled || '#D93333'}
        />
      </G>
    </Svg>
  );
}

export default FilledHeartIcon;
