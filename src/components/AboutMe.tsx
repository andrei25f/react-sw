import { useEffect, useState } from 'react'
import { characters } from '../utils/constants';
import { HeroInfo } from '../utils/types';
import { withErrorPage } from '../hoc/withErrorPage';

interface Props {
  heroId: string
}

const AboutMe = ({heroId}: Props) => {
  const [hero, setHero] = useState<HeroInfo>();

  useEffect(() => {
    const about_me = JSON.parse(localStorage.getItem(`about_me_${heroId}`)!);
    if (about_me && Date.now() - about_me.date < 1000 * 60 * 60 * 24 * 30) {
      setHero(about_me.hero);
    } else {
      fetch(characters[heroId].url)
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
          localStorage.setItem(`about_me_${heroId}`, JSON.stringify(about_me));
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

export default withErrorPage(AboutMe)