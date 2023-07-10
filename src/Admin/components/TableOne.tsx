import { useEffect, useState } from 'react';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import { PlusCircle } from "lucide-react"
import axios from 'axios';


const TableOne = () => {
const [user, setUser] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const result = await axios.get('http://localhost:3000/api/user/history')
        setUser(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers();
  }, [])

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
       <div className='flex justify-between items-center'>
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>
    
                      </div>


      <div className="flex flex-col">
      <div className="grid grid-cols-5 px-6 border-t border-stroke py-4.5  dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5">
      <div className="col-span-1 lg:ml-0 ml-[-2rem] flex items-center">
          <p className="font-medium">ID</p>
        </div>
        <div className=" col-span-1 hidden sm:flex items-center ">
          <p className="font-medium">Avater</p>
        </div>
        <div className="col-span-1 lg:ml-0 ml-[-4rem] flex items-center">
          <p className="font-medium">Username</p>
        </div>
        <div className="col-span-1 lg:ml-4 ml-8 items-center ">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 ml-4 hidden sm:flex items-center">
          <p className="font-medium">Password</p>
        </div>
       
        {/* <div className="col-span-1 lg:ml-4 ml-20 flex px-4 sm:px-8 items-center">
          <p className="font-medium">Status</p>
        </div> */}
      </div>
      {user.map((users) => (
          <div key={users._id} className="grid grid-cols-5 px-6 border-t border-stroke py-4.5 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5">
            <div className="col-span-1 lg:ml-0 ml-[-2rem] flex items-center">
              <p className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis mr-16">{users._id}</p>
            </div>
            <div className="col-span-1 hidden sm:flex items-center">
              <img src={BrandFour} alt="Product" className="w-16 h-16" />
            </div>
            <div className="col-span-1 lg:ml-0 ml-[-4rem] flex items-center">
              <p className="text-sm">{users.username}</p>
            </div>
            <div className="col-span-1 lg:ml-[-4rem] ml-[-2rem] flex items-center">
              <p className="text-sm">{users.email}</p>
            </div>
            <div className="col-span-1 hidden lg:ml-4 sm:flex items-center">
              <p className="text-sm">***********</p>
            </div>
            {/* <div className="col-span-1 flex ml-4 items-center">
              <div className="flex items-center sm:px-8 space-x-3.5">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  Online
                </p>
                </div>
        </div> */}
      </div>
      ))}
        </div>

       
    
    </div>
  );
};

export default TableOne;
