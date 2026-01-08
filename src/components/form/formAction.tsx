import type { ReactNode } from "react";

export const FormCancelButton = ({label = "Cancel" }: Readonly<{ label: ReactNode }>) => {
  return (
    <>
      <button className="cursor-pointer hover:underline hover:bg-red-900 transition hover:scale-96 w-full p-2 rounded-md-border  bg-red-800 border-red-800 text-white text-lg">
        {label}
      </button>
    </>
  );
};

export const FormSubmitButton = (
  { label = "Submit" }: Readonly<{ label: ReactNode }>
) => {
  return (
    <>
      <button className="cursor-pointer hover:underline hover:bg-green-900 transition hover:scale-96 w-full p-2 rounded-md-border bg-green-800 border-green-800 text-white text-lg">
        {label}
      </button>
    </>
  );
};
