import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

import ProductOne from '../images/product/product-01.png';

const TableFour = () => {
  const navigate = useNavigate();
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  const fetchPricingPlans = async () => {
    try {
      const response = await axios.get('/api/pricing');
      setPricingPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPricingPlan = async () => {
    try {
      const newPricingPlan = {
        name: 'Basic',
        price: 49,
        features: ['2 team members', '20GB Cloud storage', 'Integration help'],
      };
      const response = await axios.post('http://localhost:3000/api/user/pricing', newPricingPlan);
      setPricingPlans([...pricingPlans, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePricingPlan = async (id, updatedPlan) => {
    try {
      const response = await axios.put(`/api/pricing/${id}`, updatedPlan);
      const updatedPlans = pricingPlans.map((plan) =>
        plan._id === id ? response.data : plan
      );
      setPricingPlans(updatedPlans);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePricingPlan = async (id) => {
    try {
      await axios.delete(`/api/pricing/${id}`);
      const updatedPlans = pricingPlans.filter((plan) => plan._id !== id);
      setPricingPlans(updatedPlans);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">User Subscriptions</h4>
      </div>
      <div className="ml-auto mr-4">
        <button className="flex items-center text-primary" onClick={createPricingPlan}>
          <PlusCircle className="w-5 h-5 mr-2" />
          Create Pricing Plan
        </button>
      </div>
      <div className="grid grid-cols-5 px-6 border-t border-stroke py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">ID</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Subsctiption</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Feature One</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Feature Two</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Feature Three</p>
        </div>
        <div className="col-span-1 ml-4 flex items-center">
          <p className="font-medium">Feature Four</p>
        </div>
        <div className="col-span-1 ml-4 flex items-center">
          <p className="font-medium">Feature Five</p>
        </div>
        <div className="col-span-1 flex px-4 sm:px-8 items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>
      {pricingPlans.map((plan) => (
        <div key={plan._id} className="grid grid-cols-5 px-6 border-t border-stroke py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="text-sm">{plan._id}</p>
          </div>
        
          <div className="col-span-1 flex items-center">
            <p className="text-sm">{plan.name}</p>
          </div>
          <div className="col-span-1 hidden sm:flex items-center">
            <p className="text-sm">{plan.features[0]}</p>
          </div>
          <div className="col-span-1 ml-4 flex items-center">
            <p className="text-sm">{plan.features[1]}</p>
          </div>
          <div className="col-span-1 hidden sm:flex items-center">
            <p className="text-sm">{plan.features[2]}</p>
          </div>
          <div className="col-span-1 hidden sm:flex items-center">
            <p className="text-sm">{plan.features[3]}</p>
          </div>
          <div className="col-span-1 ml-4 hidden sm:flex items-center">
            <p className="text-sm">{plan.features[4]}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex items-center px-4 sm:px-8 space-x-3.5">
              <button className="hover:text-primary" onClick={() => updatePricingPlan(plan._id, { ...plan, name: 'Updated Plan' })}>
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Update icon SVG path */}
                </svg>
              </button>
              <button className="hover:text-primary" onClick={() => deletePricingPlan(plan._id)}>
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Delete icon SVG path */}
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableFour;
