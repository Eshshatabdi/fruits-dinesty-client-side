import React from 'react';
import Nutrition from '../../Nutrition/Nutrition';
import Banner from '../Banner/Banner';
import FoodDeliverSection from '../FoodDeliverSection/FoodDeliverSection';
import Items from '../Items/Items';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <FoodDeliverSection></FoodDeliverSection>
            <Nutrition></Nutrition>

        </div>
    );
};

export default Home;