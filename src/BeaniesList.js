

export default function BeaniesList({ beanieBabies }) {
  return (
    <div>
      {beanieBabies.map((beanieBabies, i) => 
        <div className='beanies' key={beanieBabies.title + i + beanieBabies.id}>
          <h2>{beanieBabies.title}</h2>
          <img src={beanieBabies.image}/>
        </div>)
      }
    </div>
  );
}
