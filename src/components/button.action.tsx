import { ClipLoader } from "react-spinners";

interface ActionButtonProps {
  loading: boolean;
  success: boolean;
  error: boolean;
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const actionButtonStyleBase =
  "bg-black font-semibold text-xl text-white w-full py-2 my-2 rounded-full hover:bg-stone-700 dark:text-black dark:bg-stone-300 dark:hover:bg-stone-100";
const actionButtonStyleSuccess = `${actionButtonStyleBase} border-2 border-green-300`;
const actionButtonStyleError = `${actionButtonStyleBase} bg-red-400 dark:bg-red-400`;

const ActionButton = ({
  loading,
  success,
  error,
  name,
  onClick,
  type
}: ActionButtonProps) => {
  if (loading) {
    return (
      <button type={type} disabled className={actionButtonStyleBase}>
        <ClipLoader />
      </button>
    );
  }

  if (success) {
    return (
      <button type={type} disabled className={actionButtonStyleSuccess}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
        </svg>
      </button>
    );
  }

  if (error) {
    return <button type={type} className={actionButtonStyleError}>Try again!</button>;
  }

  return (
    <button type={type} onClick={onClick} className={actionButtonStyleBase}>
      {name}
    </button>
  );
};

export default ActionButton;
