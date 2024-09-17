import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import { SWContext } from '../utils/context';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { characters, defaultHero } from '../utils/constants';
import ErrorPage from './ErrorPage';

const Home = () => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);
    useEffect(() => {
        if (!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])
    return characters[heroId] ? (
        <main>
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    ) : <ErrorPage/>
}

export default Home