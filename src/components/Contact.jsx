import React, { useEffect, useState } from 'react'
import '../Contact.css'
import { base_url } from '../utils/constants';

const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);

  async function fillPlanets() {
    const contact = JSON.parse(localStorage.getItem('contact'));
    if (contact && Date.now() - contact.date < 1000 * 60 * 60 * 24 * 30) {
      setPlanets(contact.planets);
    } else {
      const response = await fetch(`${base_url}/v1/planets`);
      const data = await response.json();
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

  return (
    <form className='containerContact'>

      <label>First Name
        <input type="text" name="firstname" placeholder="Your name.." />
      </label>

      <label>Last Name
        <input type="text" name="lastname" placeholder="Your last name.." />
      </label>

      <label>Country
        <select name="planet">
          {planets.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label>Subject
        <textarea name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
      </label>

      <button>Submit</button>

    </form>
  )
}

export default Contact