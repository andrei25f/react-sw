import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants';

const AboutMe = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const about_me = JSON.parse(localStorage.getItem('about_me'));
    if (about_me && Date.now() - about_me.date < 1000 * 60 * 60 * 24 * 30) {
      setHero(about_me.hero);
    } else {
      fetch(`${base_url}/v1/peoples/1`)
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
          setHero(about_me.hero);
          localStorage.setItem('about_me', JSON.stringify(about_me));
        })
    }
  }, [])

  return (
    <>
      {(!!hero) &&
        <div className='fs-2 lh-lg text-justify ms-5'>
          <p><span className='display-3'>name:</span> {hero.name}</p>
          <p><span className='display-3'>gender:</span> {hero.gender}</p>
          <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
          <p><span className='display-3'>height:</span> {hero.height}</p>
          <p><span className='display-3'>mass:</span> {hero.mass}</p>
          <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
          <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
          <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
        </div>
      }
    </>
  )
}

export default AboutMe