import PropTypes from 'prop-types';
import Features from '../Features/Features';

const Option = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col '>
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
Option.propTypes = {
    option: PropTypes.object.isRequired
}
export default Option;