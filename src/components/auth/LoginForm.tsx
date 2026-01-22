import { FormLabel } from "../form/formLabel";
import { FormInputControl } from "../form/formInput";
import { FormCancelButton, FormSubmitButton } from "../form/formAction";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

import { LoginDTO, type ICredentials, type IUser } from "../../pages/auth/auth.contract";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; 
import { useAuth } from "../../hooks/auth";

export default function LoginForm() {
  const { control, handleSubmit, formState: {errors, isSubmitting} } = useForm({
  defaultValues: {email: "", password: ""},
  resolver: zodResolver(LoginDTO)
});

const {login, getLoggedInUser} = useAuth()

const navigate = useNavigate()

  const submitForm = async (credentials: ICredentials) => {
    try{
      await login(credentials)
      const loggedInUser= await getLoggedInUser() as unknown as IUser;
      
      toast.success("Welcome to User Panel, "+loggedInUser.name)
      navigate("/"+loggedInUser.role)
    // url: http://localhost:9020/api/v1/
    // method: post
    // payload: {email:"", password: ""}
    // headers: {"Content Type"}
    }
    catch {
      toast.error("Sorry! Could not login now!!!!", {
        description: "There was some problem while logging you in at this moment, try again."
      })
    }
  }

  // console.log(errors)

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
        <FormCancelButton disabled={isSubmitting} label="Reset" />
        <FormSubmitButton disabled={isSubmitting} label="Login" />
      </div>
    </form>
  </>);
}
