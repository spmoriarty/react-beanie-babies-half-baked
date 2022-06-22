import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      <h2>{beanieBabies.title}</h2>
      <p>{beanieBabies.image}</p>
      <BeanieBaby BeanieBaby={BeanieBaby} />
    </div>
  );
}
