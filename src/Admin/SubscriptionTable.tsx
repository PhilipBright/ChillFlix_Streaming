import Breadcrumb from './components/Breadcrumb';

import TableFour from './components/TableFour';

const UserTable = () => {
  return (
    <>
      <Breadcrumb pageName="Subscription History" />

      <div className="flex flex-col gap-10">
       
        <TableFour />
        
      </div>
    </>
  );
};

export default UserTable;
