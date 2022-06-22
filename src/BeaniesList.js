

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {beanieBabies.map((beanieBabies, i) => 
        <div key={beanieBabies.title + i + beanieBabies.id}>
          <h2>{beanieBabies.title}</h2>
          <p>{beanieBabies.image}</p>
        </div>)
      }
    </div>
  );
}
