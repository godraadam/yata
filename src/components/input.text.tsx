type TextFieldProps = {
  type: string;
  placeholder?: string;
  props?: {};
};

export const textfieldClass =
  "px-3 py-2 my-2 shadow-lg dark:shadow-black rounded-full w-full dark:bg-stone-300 dark:placeholder:text-stone-500";

const TextField = ({ type, placeholder, props }: TextFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder || ""}
      className={textfieldClass}
      {...props}
    />
  );
};

export default TextField;
