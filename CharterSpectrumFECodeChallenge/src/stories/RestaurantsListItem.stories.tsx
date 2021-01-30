import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RestaurantsListItem, RestaurantProps } from './RestaurantsListItem';

export default {
    title: 'Restaurant List Item',
    component: RestaurantsListItem,
  } as Meta;

const Template: Story<RestaurantProps> = (args) => <RestaurantsListItem {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    index: 0, 
      restaurant: {
          name: 'TrueFood', 
          city: 'Denver', 
          state: 'CO', 
          telephone: 7209805120, genre: 'American'
        }
}

