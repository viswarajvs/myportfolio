import { createContext, useEffect, useState } from "react";
import { pages } from "../common/pages";
import { useLocation, useNavigate } from "react-router-dom";

const PageContext = createContext()
const PageProvider = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const getPage = () => {
        const currentPath = location.pathname
        const pageObj = pages.filter(item => item.path === currentPath)
        if (pageObj?.length > 0) {
            return pageObj?.[0]?.id
        }
        return 1
    }
    const [currentPage, setCurrentPage] = useState(getPage())
    const [direction, setDirection] = useState('down')

    useEffect(() => {
        if (location.pathname !== pages?.[currentPage]?.path) {
            navigate(pages?.[currentPage]?.path)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    return (
        <PageContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                direction,
                setDirection
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export { PageContext, PageProvider };