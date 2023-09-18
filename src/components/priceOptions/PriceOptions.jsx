import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const PriceOptions = () => {
    
    const prices =[
        {
          "id": "1",
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
          "Access to gym facilities",
          "Unlimited use of cardio equipment",
          "Locker room access"
          ]
        },
        {
            "id": "2",
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Access to weightlifting area",
              "Group fitness classes",
              "Personal trainer sessions (2/month)",
              "Locker room access"
            ]
          },
          {
            "id": "3",
            "name": "Family Membership",
            "price": 79.99,
            "features": [
              "Access to gym for up to 4 family members",
              "Unlimited use of cardio equipment",
              "Access to weightlifting area",
              "Group fitness classes",
              "Locker room access"
            ]
          },
          {
            "id": "4",
            "name": "Student Membership",
            "price": 24.99,
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Valid student ID required"
            ]
          },
          {
            "id": "5",
            "name": "Senior Membership",
            "price": 19.99,
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Access to senior fitness classes",
              "Locker room access",
              "Age 65+ required"
            ]
          },
          {
            "id": "6",
            "name": "Corporate Membership",
            "price": 59.99,
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Access to weightlifting area",
              "Group fitness classes",
              "Locker room access",
              "Discounted for registered companies"
            ]
          }
    ]

    return (
        <div className='m-12'>
            <h2>Best Prices in the town</h2>
          <div className='grid md:grid-cols-3 gap-6'>
          {
                prices.map(option=><PriceOption option={option} key={option.id}></PriceOption>)
            }
          </div>
        </div>
    );
};

export default PriceOptions;