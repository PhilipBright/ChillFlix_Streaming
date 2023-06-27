import Breadcrumb from './components/Breadcrumb';

import TableTwo from './components/TableTwo';

const MovieTables = () => {
  return (
    <>
      <Breadcrumb pageName="Movie Lists" />

      <div className="flex flex-col gap-10">
       
        <TableTwo />
        
      </div>
    </>
  );
};

export default MovieTables;
