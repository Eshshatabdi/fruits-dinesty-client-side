import React from 'react';
import Banner from '../Banner/Banner';
import FoodDeliverSection from '../FoodDeliverSection/FoodDeliverSection';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <FoodDeliverSection></FoodDeliverSection>

        </div>
    );
};

export default Home;