import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import services from '../assets/services';
<asses></asses>

// For Service Cards

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
             <CardItem
              src='../images/img-corporate.jpg'
              text='Provide your business with protection against unforeseen circumstances to mitigate risk.'
              label='Corporate'
              path='/services'
            />
            <CardItem
              src='../images/img-marine.jpg'
              text='Coverage on personal or commercial property while it is in transit from one location to another via any necessary modes of transport'
              label='Transportation'
              path='/services'
            />
            <CardItem
              src='../images/personal-insurance.jpg'
              text='Property insurance covers equipment, signage, inventory, and furniture in the event of a fire, storm or theft.'
              label='Property'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='../images/img-finance.jpg'
              text='Provides coverage that protects your business from unexpected financial losses'
              label='Financial'
              path='/services'
            />
            <CardItem
              src='../images/liability-insurance.jpg'
              text='Provides protection against negligence claims that results from mistakes, injuries, damage to other people or property'
              label='Liability'
              path='/services'
            />
            <CardItem
              src='../images/employee-benefits.jpg'
              text='Employee Benefits liability covers businesses from errors and omissions that occur when employee benefit plans are administered.'
              label='Employee Benefits'
              path='/services'
            />
             <CardItem
              src='../images/img-2.jpg'
              text='Coverage for various protection for you and your family'
              label='Personal'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
