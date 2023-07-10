import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { getPurchaseHistory } from '../../store'; // Make sure the file path is correct


const TableThree = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try{
        const output = await axios.get('http://localhost:3000/api/user/order')
        setOrder(output.data)
      }catch (error){
        console.error(error)
      }

    } 
    fetchOrders();
  }, [])



  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Username
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Subscription
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Payment
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {order.map((purchase) => (
              <tr key={purchase._id}>
                <td className="border-b border-[#eee] py-5 px-2 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">{purchase._id}</h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {purchase.username}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {purchase.subscription}
                    
                  </p>
                  
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-blue-500">
                    
                    {purchase.paymentMethod}
                  </p>
                  
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <p className="text-black dark:text-white">{purchase.date}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
