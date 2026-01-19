import type { ReactNode } from "react";

interface IFormActionButtons{
  label: ReactNode,
  disabled?: boolean
}

export const FormCancelButton = ({label = "Cancel", disabled=false}: Readonly<IFormActionButtons>) => {
  return (
    <>
      <button 
      disabled={disabled} 
      className="disabled:bg-red-900/50 disabled:cursor-not-allowed cursor-pointer hover:underline hover:bg-red-900 transition hover:scale-96 w-full p-2 rounded-md border  bg-red-800 border-red-800 text-white text-lg">
        {label}
      </button>
    </>
  );
};

export const FormSubmitButton = (
  { label = "Submit",  disabled=false}: Readonly<IFormActionButtons>
) => {
  return (
    <>
      <button 
      disabled={disabled} 
      className="disabled:bg-teal-900/50 disabled:cursor-not-allowed cursor-pointer hover:underline hover:bg-green-900 transition hover:scale-96 w-full p-2 rounded-md border bg-green-800 border-green-800 text-white text-lg">
        {label}
      </button>
    </>
  );
};
