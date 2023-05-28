import usePasswordToggle from "../hooks/usePasswordToggle";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ fieldName, label, register, errors, isConfident }) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div>
      <div className={isConfident ? "relative" : ""}>
        <input
          {...register(fieldName)}
          type={isConfident ? PasswordInputType : fieldName}
          placeholder={label}
          // className="input w-full focus:outline-none bg-gray-100 rounded-lg"
          className="p-2 rounded-xl border w-full"
        />
        {isConfident && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 fill-gray-400">
            {ToggleIcon}
          </div>
        )}
      </div>

      {errors[fieldName] && (
        <ErrorMessage errors={errors} fieldName={fieldName} />
      )}
    </div>
  );
};

export default FormField;
