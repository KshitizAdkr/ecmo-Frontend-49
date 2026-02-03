import { useEffect, useState, type BaseSyntheticEvent, type ReactNode } from "react"
import { NavLink } from "react-router"
export interface ITableHeaderProps {
    title: ReactNode,
    showSearch: boolean, 
    btnUrl?: string | null, 
    btnText?: ReactNode | null,
    getSearchResult?: (params: {page?: number, limit?: number, search?: string}) =>  Promise<void>;

}

export  const TableHeader = ({title, showSearch, btnUrl=null, btnText=null, getSearchResult}: Readonly<ITableHeaderProps>) => {
        const [search, setSearch] = useState<string>()

        const handleSearch= async () => {
       if(getSearchResult){
        await getSearchResult({search: search, page: 1, limit:20 })
       }
    }
     // debounce
    useEffect(() => {
       const timer = setTimeout(async () => {
            await handleSearch()
        }, 500)
        return () =>{ 
            clearTimeout(timer)
        }
    },[search])
    return(
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className={`flex gap-2 w-full ${showSearch ? 'items-center' : 'justify-end'}`}>
                {
                    showSearch ? 
                    <div className="flex gap-2">
                        <input
                            type="Search"
                            placeholder="Enter Search Keywords..."
                            className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                            onChange={(e:BaseSyntheticEvent) => setSearch(e.target.value)}
                        />
                </div>: <></>
                }

                {btnUrl && btnText ?
                <div className="w-1/3">
                    <NavLink
                        to={btnUrl} 
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            {btnText}
                        </NavLink>
                </div> : <></>}
            </div>    
        </div>)
}