import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

export default function BannerCreatePage(){
    const {loggedInUser} = useAuth()
    const{control, handleSubmit, foirmState: {errors, isSubmitting}} = useForm({
        defaultValues: {
            title: string,
            url: string,
            status: string,
            image: File
        }
    })

    return (
        <section className="">

        </section>)
}