import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div className='ml-10'>
            <p className='flex items-center'> <FaRegCheckCircle  className='mr-2'/> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Features;