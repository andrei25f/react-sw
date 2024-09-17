import { FC, useContext, useEffect } from "react";
import { characters, defaultHero } from "../utils/constants";
import { SWContext } from "../utils/context";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

export const withErrorPage = (Component: FC<any>) => (props: any) => {
    const { heroId = defaultHero } = useParams();
    const { changeHero, setIsError } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }
        else {
            setIsError(true);
            return () => setIsError(false);
        }
    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props} /> : <ErrorPage />
}