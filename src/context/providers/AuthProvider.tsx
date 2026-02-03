import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUser } from "../../pages/auth/auth.contract";
import axiosInstance from "../../config/axios.config";
import Cookies from "js-cookie"

export default function AuthProvider({children}: Readonly<{children: ReactNode}>){
    
    const [loggedInUser, setLoggedInUser] = useState<IUser | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const login = async (credentials: ICredentials): Promise<IUser | void> => {
        const response = await axiosInstance.post('/auth/login', credentials);
         const token =
            (response as any)?.tokens?.accessToken ??
            (response as any)?.accessToken ??
            (response as any)?.token ??
            response;
        Cookies.set("token", String(token), {expires: 1, secure: import.meta.env.PROD || window.location.protocol === "https:", sameSite: "lax"})
        const userResponse = await getLoggedInUser()
        return userResponse;
    };

    const getLoggedInUser = async(): Promise<IUser|void> => {
        try{
            const userDetail = await axiosInstance.get('/auth/me') as unknown as IUser;
            setLoggedInUser(userDetail)
            return userDetail;
        } catch {
            setLoggedInUser(undefined);
        } finally {
            setLoading(false);
        }
    };

    const logout = async() : Promise<void> => {
        try{
            await axiosInstance.post("/auth/logout");
        } catch(error) {
            //
        }
        finally{
            Cookies.remove("token")
            setLoggedInUser(undefined);
        }
    };
    
    useEffect(() => {
        getLoggedInUser()
    }, []);

    return (<>
    {
        loading ?"Loading..." :
        <AuthContext.Provider value={{
            login,
            getLoggedInUser,
            loggedInUser,
            logout
        }}>
        {children}
        </AuthContext.Provider>
    }
    </>)
}