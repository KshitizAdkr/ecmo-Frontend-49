import { useEffect } from "react";
import { useOutletContext } from "react-router";
import type { IOutletContext } from "../layout/AuthLayout";


export default function RegisterPage() {
  const outletContext = useOutletContext<IOutletContext>();
  useEffect(() => {
    outletContext.setLayoutData({
      pageTitle: "Register from Here",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btnTxt: "Login Here",
      btnLink: "/",
    });
  }, []);

  return ( 
  <>
    Register Form
  </>
  );
}
