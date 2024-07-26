import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Notification(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M28.707 19.293L26 16.586V13a10.014 10.014 0 00-9-9.95V1h-2v2.05A10.014 10.014 0 006 13v3.586l-2.707 2.707A1 1 0 003 20v3a1 1 0 001 1h7v.777a5.15 5.15 0 004.5 5.199A5.006 5.006 0 0021 25v-1h7a1 1 0 001-1v-3a1 1 0 00-.293-.707M19 25a3 3 0 01-6 0v-1h6zm8-3H5v-1.586l2.707-2.707A1 1 0 008 17v-4a8 8 0 0116 0v4a1 1 0 00.293.707L27 20.414z" />
    </Svg>
  );
}

export default Notification;
