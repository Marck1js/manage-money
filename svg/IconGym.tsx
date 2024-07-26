import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconGym(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="none"
        stroke="#000"
        d="M8.11 15.89l7.779-7.78M2 22l1.848-1.848M22 2l-1.848 1.848M2.1 9.878L14.121 21.9l-.177.176-1.737-.208c-1.75-.21-3.522.138-5.098.926L6.697 23 1 17.303l.206-.412c.788-1.576 1.136-3.348.926-5.098l-.208-1.737zm7.78-7.776l12.02 12.02.177-.177-.208-1.737c-.21-1.75.138-3.522.926-5.098L23 6.697 17.303 1l-.413.206c-1.575.788-3.348 1.136-5.097.926l-1.738-.208z"
      />
    </Svg>
  );
}

export default IconGym;
