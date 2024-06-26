import Service from "./Service";

const Services = () => {

    const gymPackages = [
        { id: 1, price: 29.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Locker room', 'Shower facilities'], name: 'Basic Membership' },
        { id: 2, price: 49.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Locker room', 'Shower facilities', 'Wi-Fi'], name: 'Standard Membership' },
        { id: 3, price: 69.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes'], name: 'Premium Membership' },
        { id: 4, price: 89.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service'], name: 'Deluxe Membership' },
        { id: 5, price: 109.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Personal training', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment'], name: 'Elite Membership' },
        { id: 6, price: 149.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Personal training', 'Nutrition counseling', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Massage therapy', 'Yoga classes'], name: 'Ultimate Membership' },
        { id: 7, price: 39.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Spa access'], name: 'Silver Membership' },
        { id: 8, price: 59.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Childcare services'], name: 'Gold Membership' },
        { id: 9, price: 79.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Personal training'], name: 'Platinum Membership' },
        { id: 10, price: 99.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Nutrition counseling'], name: 'Diamond Membership' },
        { id: 11, price: 119.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Personal training'], name: 'Titanium Membership' },
        { id: 12, price: 139.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Personal training', 'Massage therapy'], name: 'Diamond Plus Membership' },
        { id: 13, price: 159.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Personal training', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Massage therapy', 'Yoga classes', 'Nutrition counseling'], name: 'Legendary Membership' },
        { id: 14, price: 179.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Personal training', 'Massage therapy', 'Yoga classes', 'Nutrition counseling', 'Exclusive workshops'], name: 'VVIP Membership' },
        { id: 15, price: 199.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Personal training', 'Massage therapy', 'Yoga classes', 'Nutrition counseling', 'Exclusive workshops', 'Private locker'], name: 'Royal Membership' },
        { id: 16, price: 219.99, features: ['Access to gym', 'Free weights', 'Cardio machines', 'Group classes', 'Pool access', 'Sauna', 'Locker room', 'Shower facilities', 'Wi-Fi', 'Guest passes', 'Towel service', 'Fitness assessment', 'Personal training', 'Massage therapy', 'Yoga classes', 'Nutrition counseling', 'Exclusive workshops', 'Private locker', 'Unlimited guest passes'], name: 'Emperor Membership' }
      ];
      

    return (
        <div>
            <h2 className='font-extrabold text-3xl text-center'>Our Services</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    gymPackages.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;