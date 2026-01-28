import z from "zod"

export interface IBannerCreateData {
    title: string,
    url: string,
    status: string,
    image: File
}

export const bannerDTO = z.object({
    title: z.string().min(3),
    url: z.url().nonempty("Url is required"),
    status: z.string().regex(/^(active|inactive)$/, "Status can only be either Published or Un-Published")
})