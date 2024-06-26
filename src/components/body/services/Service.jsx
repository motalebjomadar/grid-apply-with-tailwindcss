import Features from "./Features";
import PropTypes from 'prop-types';


const Service = ({service}) => {
    const {name, features, price} = service
    return (
        <div className='flex flex-col bg-emerald-200 hover:bg-emerald-300 duration-300 font-bold p-2'>
            <h1 className='text-center'>
                <p className='text-3xl'>{name}</p>
                <p className='text-2xl'> RM : {price}</p>
            </h1>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='bg-green-500 hover:bg-green-700 hover:text-white duration-500 w-full text-2xl rounded-lg pb-1 mt-3'>Buy Now</button>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;