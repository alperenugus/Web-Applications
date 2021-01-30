import React, {FC, ReactElement} from 'react';
import './RestaurantsListItem.css'
import Restaurant from '../models/Restaurant';

export interface RestaurantProps {
    index: number;
    restaurant: Restaurant;
}

export const RestaurantsListItem : FC<RestaurantProps> = ({index, restaurant}: RestaurantProps) : ReactElement => {
    return(
        <table>
            <tr>
                <td>{index + 1}.&ensp;{restaurant.name}</td>
                <td>{restaurant.city}</td>
                <td>{restaurant.state}</td>
                <td>{restaurant.telephone}</td>
                <td>{restaurant.genre}</td>
            </tr>
        </table>

    );
}