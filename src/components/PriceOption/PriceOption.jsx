import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const {name, features, price} = option;
  return (
    <div className='bg-emerald-600 rounded-lg p-8 text-white flex flex-col'>
        <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
        </h2>
        <h4 className='text-3xl text-center my-8 font-normal'>{name}</h4>
        <div className='pl-8 flex-grow'>
        {
            features.map((feature, index) => <Feature 
                key={index}
                feature={feature}
                ></Feature>)
        }
        </div>
        <button className='w-full mt-12 rounded-lg bg-slate-500 py-4 text-base font-medium
        hover:bg-slate-950'>Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option : PropTypes.object,
}

export default PriceOption