import axios from "axios";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Phones() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(response => {
        const phoneData = response.data.data;
        const phonesWithFakeData = phoneData.map(phone => ({
          name: phone.phone_name,
          price: parseInt(phone.slug.split('-')[1])
        }));
        setPhones(phonesWithFakeData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className='text-5xl'>phones: {phones.length}</h2>
      <BarChart width={900} height={400} data={phones}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
    </div>
  );
}

export default Phones;
