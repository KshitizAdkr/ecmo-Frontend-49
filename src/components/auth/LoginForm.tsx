import { FormLabel } from "../form/formLabel";
import { FormInputControl } from "../form/formInput";
import { FormCancelButton, FormSubmitButton } from "../form/formAction";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

import { LoginDTO, type ICredentials } from "../../pages/auth/auth.contract";
import { zodResolver } from "@hookform/resolvers/zod";
// import Cookies from "js-cookie"

export default function LoginForm() {
  const { control, handleSubmit, formState: {errors} } = useForm({
  defaultValues: {email: "", password: ""},
  resolver: zodResolver(LoginDTO)
});

  const submitForm = (credentials: ICredentials) => {
    console.log("Submit Event", credentials)
      // data storage in client side token
      // webstorage => cookie, lcalStorage,   

      // Cookies.set("token", "", {
      //   expires: 1,   // 1-day duration
      //   secure: true,
      //   sameSite: "lax"
      // })
      // Cookies.remove("name")
  }

  console.log(errors)

  return (
    <>
    <form 
      onSubmit={handleSubmit(submitForm)}
      id="loginForm" 
      className="flex flex-col gap-5 p-4" 
    >
      <div className="flex flex-col w-full md:flex-row md:items-center">
        <FormLabel htmlFor="email">Username:</FormLabel>
        <div className="w-full md:w-3/4">
          <FormInputControl<ICredentials> name= "email" type= "email" control = {control} placeholder="Enter your username" errMsg={errors?.email?.message} />
        </div>
      </div>

      <div className="flex flex-col w-full md:flex-row md:items-center">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <div className="w-full md:w-3/4">
        <FormInputControl name="password" type="password" placeholder="Enter your Password" control={control} errMsg={errors?.password?.message} />
        </div>
      </div>

      <div className="flex flex-col w-full md:flex-row justify-end">
        <NavLink
        to="/forget-password"
        className="text-teal-800 italic text-sm hover:underline">
            Forgot Password?
        </NavLink>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-5 items-center">
        <FormCancelButton label="Reset" />
        <FormSubmitButton label="Login" />
      </div>
    </form>
  </>);
}
