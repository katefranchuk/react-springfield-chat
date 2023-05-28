import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const usePasswordToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Icon = isVisible ? (
    <FaRegEye onClick={() => setIsVisible(!isVisible)} />
  ) : (
    <FaRegEyeSlash onClick={() => setIsVisible(!isVisible)} />
  );
  const InputType = isVisible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
