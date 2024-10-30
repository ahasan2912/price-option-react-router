import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";
const Features = ({feature}) => {
    return (
        <div>
            <p className='text-xl flex items-center'><FaRegCheckCircle className='text-green-500 mr-2'/> {feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature: PropTypes.string.isRequired
}
export default Features;