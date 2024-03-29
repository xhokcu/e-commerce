import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function GoogleIcon() {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M22.305 10.041H21.5V10h-9v4h5.651A5.998 5.998 0 016.5 12a6 6 0 016-6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0012.5 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z"
        fill="#FFC107"
      />
      <Path
        d="M3.653 7.346l3.286 2.409A5.997 5.997 0 0112.5 6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0012.5 2a9.994 9.994 0 00-8.847 5.346z"
        fill="#FF3D00"
      />
      <Path
        d="M12.5 22c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619A5.955 5.955 0 0112.5 18a5.997 5.997 0 01-5.641-3.973L3.598 16.54C5.253 19.778 8.614 22 12.5 22z"
        fill="#4CAF50"
      />
      <Path
        d="M22.305 10.041H21.5V10h-9v4h5.651a6.02 6.02 0 01-2.043 2.785h.002l3.095 2.619C18.985 19.602 22.5 17 22.5 12c0-.67-.069-1.325-.195-1.959z"
        fill="#1976D2"
      />
    </Svg>
  );
}

export default GoogleIcon;
