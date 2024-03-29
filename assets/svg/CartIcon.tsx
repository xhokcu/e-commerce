import { ISvgProps } from '@types/ISvgProps';
import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

function CartIcon(props: ISvgProps) {
  const { filled, width, height }: ISvgProps = props;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={width || 24}
        height={height || 24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 015 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 017 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 017 22zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0115 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0117 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0117 22zM6.15 6l2.4 5h7l2.75-5H6.15zM5.2 4h14.75c.383 0 .675.17.875.513.2.341.208.687.025 1.037l-3.55 6.4c-.183.333-.43.592-.738.775A1.945 1.945 0 0115.55 13H8.1L7 15h12v2H7c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1V2h3.25l.95 2z"
          fill={filled || '#000'}
        />
      </G>
    </Svg>
  );
}

export default CartIcon;
