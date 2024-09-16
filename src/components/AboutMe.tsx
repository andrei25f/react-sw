import { useEffect, useState } from 'react'
import { base_url, characters } from '../utils/constants';
import { CharacterItem, HeroInfo } from '../utils/types';
import { useParams } from 'react-router-dom';

const AboutMe = () => {
  const [hero, setHero] = useState<HeroInfo>();
  const {heroId} = useParams();

  useEffect(() => {
    //type CharacterItem = {[key: string]: string | number};
    const _hero = characters[heroId as keyof CharacterItem] ?? characters['luke'];
    const heroName = Object.entries(characters).filter(x => x[1] == _hero)[0][0];

    const about_me = JSON.parse(localStorage.getItem(`about_me_${heroName}`)!);
    if (about_me && Date.now() - about_me.date < 1000 * 60 * 60 * 24 * 30) {
      setHero(about_me.hero);
    } else {
      fetch(_hero.url)
        .then(response => response.json())
        .then(data => {
          const about_me = {
            date: Date.now(),
            hero: {
              name: data.name,
              gender: data.gender,
              birth_year: data.birth_year,
              height: data.height,
              mass: data.mass,
              hair_color: data.hair_color,
              skin_color: data.skin_color,
              eye_color: data.eye_color,
            }
          };
          setHero(about_me.hero as any);
          localStorage.setItem(`about_me_${heroName}`, JSON.stringify(about_me));
        })
    }
    return () => console.log(`Component AboutMe was unmounted`)
  }, [heroId])

  return (
    <>
      {(!!hero) &&
        <div className='text-3xl leading-loose text-justify tracking-widest ml-8'>
          {Object.keys(hero).map(key => <p key={key}><span className='text-[1.25em] capitalize'>{key.replace("_", " ")}:</span> {hero[key as keyof HeroInfo]}</p>)}
        </div>
      }
    </>
  )
}

export default AboutMe