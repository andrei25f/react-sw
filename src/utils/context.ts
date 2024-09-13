import { createContext } from "react";

export const PageContext = createContext<Partial<IPageContext>>({});

export interface IPageContext {
    setPage: (page: string) => void
}