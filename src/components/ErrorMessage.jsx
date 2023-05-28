import { MdOutlineError } from "react-icons/md";

const ErrorMessage = ({ errors, fieldName }) => {
  return (
    <div className="flex items-center gap-x-2 mt-1">
      <MdOutlineError color="red" />
      <span className="text-red-600 text-xs">{errors[fieldName].message}</span>
    </div>
  );
};

export default ErrorMessage;
