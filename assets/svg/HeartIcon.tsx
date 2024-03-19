import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import { ISvgProps } from '@types/ISvgProps';

function HeartIcon(props: ISvgProps) {
  const { width, height, stroke } = props;
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
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M12 21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925-1.1-1.1-1.975-2.088-2.625-2.963-.65-.874-1.104-1.679-1.362-2.412A6.726 6.726 0 012 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65a5.77 5.77 0 012.475.55A5.93 5.93 0 0112 4.75a5.93 5.93 0 012.025-1.55 5.769 5.769 0 012.475-.55c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 .767-.13 1.517-.387 2.25-.259.733-.713 1.537-1.363 2.412-.65.876-1.525 1.863-2.625 2.963s-2.492 2.408-4.175 3.925L12 21zm0-2.7a109.28 109.28 0 003.95-3.688c1.033-1.024 1.85-1.916 2.45-2.675.6-.758 1.017-1.433 1.25-2.025.233-.591.35-1.179.35-1.762 0-1-.333-1.833-1-2.5s-1.5-1-2.5-1a3.86 3.86 0 00-2.175.662C13.658 5.754 13.2 6.317 12.95 7h-1.9c-.25-.683-.708-1.246-1.375-1.688A3.86 3.86 0 007.5 4.65c-1 0-1.833.333-2.5 1s-1 1.5-1 2.5c0 .583.117 1.17.35 1.762.233.592.65 1.267 1.25 2.025.6.759 1.417 1.65 2.45 2.676A109.306 109.306 0 0012 18.3z"
          fill={stroke || '#D93333'}
        />
      </G>
    </Svg>
  );
}

export default HeartIcon;