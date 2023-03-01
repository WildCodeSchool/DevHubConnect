import React from "react";
import Image from "mui-image";
import ComposantLoginImage from "../../../../assets/composantLoginImage.png";

function SignInImage() {
  return (
    <div>
      <Image src={ComposantLoginImage} aspectRatio={16 / 9} disableSpinner />
    </div>
  );
}

export default SignInImage;
