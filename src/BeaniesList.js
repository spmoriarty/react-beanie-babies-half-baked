import { Link } from 'react-router-dom';


export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanie-div">
      {beanieBabies.map((beanieBabies, i) => 
        <Link key={beanieBabies.title + i + beanieBabies.id} to={`/beanies/${beanieBabies.id}`}>
          <div className='beanies'>
            <h2>{beanieBabies.title}</h2>
            <img src={beanieBabies.image} />
          </div>
        </Link>)
      }
    </div>
  );
}

