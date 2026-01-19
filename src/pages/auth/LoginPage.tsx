import { useEffect } from "react";
import { useOutletContext } from "react-router";
import LoginForm from "../../components/auth/LoginForm"; 
import { type IOutletContext } from "../layout/layout.contract";
export default function LoginPage() {
  const outletContext = useOutletContext<IOutletContext>();

  useEffect(() => {
      outletContext.setLayoutData({
        pageTitle: "Login from Here",
        subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        btnTxt: "Register Here",
        btnLink: "/register",
      });
    }, []);
  

  return (
    <>
      <LoginForm />
    </>
  );
}
