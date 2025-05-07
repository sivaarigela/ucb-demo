'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image"; // Optional: For easier handling of requests

type UserData = {
  name: string;
  email: string;
  website: string;
};

/*async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}*/

//fetchData();
export default function AboutPage() {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    // Using Axios to fetch data from JSONPlaceholder
    axios
      .get('https://jsonplaceholder.typicode.com/users/1') // Fake API endpoint
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []); // Empty array means this runs once after the first render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid items-center justify-items-center sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-[1px] row-start-2 bg-gray-100">
        <Image
          className="dark:invert"
          src="https://www.ucb.com/sites/default/files/2024-11/13.png"
          alt="Next.js logo"
          width={1400}
          height={600}
          priority
        />
        <div>
          <p className='text-justify pt-2'>A global biopharma company, inspired by the needs of people living with severe diseases
            At UCB, we believe that everyone deserves to live the best life that they can. That’s why – as a global biopharmaceutical leader - we’re focused on creating valuable solutions that improve the lives of people living with neurological and autoimmune conditions.</p>

          <p className='text-justify pt-2'>A healthier and fairer future requires collective action and we believe in extending our impact beyond what we can achieve alone. We work closely and forge strong connections with diverse networks of patients, caregivers, health care professionals and other stakeholders who know the challenges of severe diseases.</p>

          <p className='text-justify pt-2'>Our foundational commitment to crafting sustainable solutions and delivering medicines that aim to improve lives is at the core of all that we do, as we live our purpose each day - bringing together the expertise, talent, tools and scientific ingenuity needed to pursue what’s right for people living with severe disease and society, and making informed choices to improve health equity and minimize our environmental footprint.</p>

          <p className='text-justify pt-2'>This is powered by more than 9,000 people – from our headquarters in Belgium and across nearly 40 countries worldwide. Our people have lived our purpose each day since 1928, making critical investments in biopharmaceutical research and leading innovations that strive to achieve a meaningful impact on the lives of those we serve.</p>


        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 pt-4">
          Our purpose</h4>
          <p className='text-justify pt-2'>UCB is driven to ensure that everyone can live the best life they can, as free as possible from the challenges and uncertainty of disease. This ambition fuels our purpose: creating value in the lives of the people we serve, now and into the future.</p>

          <p className='text-justify pt-2'>Our research and development activity across neurology, immunology, and other areas where our expertise aligns with unmet needs is driven by our connection to the people we serve. Their unique and diverse perspectives serve as guides and inspiration as we explore the furthest reaches of science and medical knowledge. We listen to and learn from them, ensuring that our work has the greatest possible impact by delivering differentiated solutions that create value that cannot be expressed in numbers alone. We seek out tools, technologies, employees and partners that let us respond to patient needs with purposeful innovations that make a truly meaningful impact.</p>

          <p className='text-justify pt-2'>We pursue that ambition each day, promoting a culture of collaboration and curiosity that values diverse perspectives and backgrounds. We are committed to caring for each other, for our communities, for the planet, and for the people who inspire our work.</p>
        </div>
      </main>
    </div>
  );
}
