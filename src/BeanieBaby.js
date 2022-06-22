import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBeanieBabies } from './services/fetch-utils';

export default function BeanieBaby({ beanieBaby }) {
  const params = useParams();
  const [beanieBaby, setBeanieBaby] = useState({});

  useEffect(() => {
    async function fetchBeanie() {
      const data = await getBeanieBabies(params.id);
      setBeanieBaby(data);
    }
    fetchBeanie();
  }, [params.id]);

  return (
<div>
  <h2>{beanieBaby.title}</h2>
</div>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    
  );
}
