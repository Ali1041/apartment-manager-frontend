import React from 'react';
import { HOC } from '../../components/HOC';
import ApartmentLV from './ApartmentLV';

const Apartment = () => {
  return (
    <HOC>
      <ApartmentLV />
    </HOC>
  )
}

export default Apartment