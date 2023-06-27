import Breadcrumb from './components/Breadcrumb';


import TableThree from './components/TableThree';

const PurchaseTable = () => {
  return (
    <>
      <Breadcrumb pageName="Purchases" />

      <div className="flex flex-col gap-10">
       
        <TableThree />
        
      </div>
    </>
  );
};

export default PurchaseTable;
