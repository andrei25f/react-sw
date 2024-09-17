import { useContext } from "react"
import Navigation from "./Navigation"
import { SWContext } from "../utils/context"
import { characters } from "../utils/constants";

function Header() {
    const {hero, isError} = useContext(SWContext);

    return (
        <header className="bg-grey-color rounded-t-3xl">
            <Navigation />
            <h1 className="text-center py-4 text-6xl">{isError ? 'Error' : characters[hero].name}</h1>
        </header>
    )
}

export default Header