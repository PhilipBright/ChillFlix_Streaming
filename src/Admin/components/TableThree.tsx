const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
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
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-2 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                 1
                </h5>
               
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              Philip Bright
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  Business Plan
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                <p className="text-black dark:text-white">Jan 13,2023</p>
                 
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-2 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                 1
                </h5>
               
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              Philip Bright
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  Business Plan
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                <p className="text-black dark:text-white">Jan 13,2023</p>
                 
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-2 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                 1
                </h5>
               
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              Philip Bright
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  Business Plan
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                <p className="text-black dark:text-white">Jan 13,2023</p>
                 
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
