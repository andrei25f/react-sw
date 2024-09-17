import { useContext, useEffect, useState } from 'react'
import { base_url, characters, defaultHero } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { SWContext } from '../utils/context';
import ErrorPage from './ErrorPage';

const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);
  const { heroId = defaultHero } = useParams();
  const { changeHero } = useContext(SWContext);

  async function fillPlanets() {
    const contact = JSON.parse(localStorage.getItem('contact')!);
    if (contact && Date.now() - contact.date < 1000 * 60 * 60 * 24 * 30) {
      setPlanets(contact.planets);
    } else {
      const response = await fetch(`${base_url}/v1/planets`);
      const data: ({ name: string })[] = await response.json();
      const contact = {
        date: Date.now(),
        planets: data.map(item => item.name)
      };
      setPlanets(contact.planets);
      localStorage.setItem('contact', JSON.stringify(contact));
    }
  }

  useEffect(() => {
    fillPlanets();
  }, [])

  useEffect(() => {
    if (!characters[heroId]) {
      return;
    }
    changeHero(heroId);
  }, [heroId])
  return characters[heroId] ? (
    <form className='rounded-[5px] bg-[#f2f2f2] p-5'>

      <label className='w-fill text-red-color'>First Name
        <input className='w-full p-3 border border-solid border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y' type="text" name="firstname" placeholder="Your name.." />
      </label>

      <label className='w-fill text-red-color'>Last Name
        <input className='w-full p-3 border border-solid border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y' type="text" name="lastname" placeholder="Your last name.." />
      </label>

      <label className='w-fill text-red-color'>Country
        <select className='w-full p-3 border border-solid border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y' name="planet">
          {planets.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className='w-fill text-red-color'>Subject
        <textarea className='h-[200px] w-full p-3 border border-solid border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y' name="subject" placeholder="Write something.."></textarea>
      </label>

      <button className='bg-[#04AA6D] text-white px-3 py-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]'>Submit</button>

    </form>
  ) : <ErrorPage />
}

export default Contact