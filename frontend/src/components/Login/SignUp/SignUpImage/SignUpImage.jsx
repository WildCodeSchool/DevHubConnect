import * as React from "react";
import Image from "mui-image";
import devHubImage from "../../../../assets/devHubImage.png";

export default function signUpImage() {
  return (
    <div>
      <Image src={devHubImage} fit="contain" alt="Connected People" />
    </div>
  );
}
