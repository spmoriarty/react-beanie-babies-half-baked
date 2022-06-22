import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

export default function BeanieBaby() {
  const [beanieBaby, setBeanieBaby] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchBeanie() {
      const data = await getBeanieBabies(params.id);
      setBeanieBaby(data);
    }
    fetchBeanie();
  }, [params.id]);

  return (
    <div>
      <BeaniesList beanieBaby={beanieBaby} />
  
    </div>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    
  );
}
