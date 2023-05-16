const GenericTable = () => {
  return (
    <>
        <ul className="list-group">
          <li className="list-group-item justify-content-between align-items-center">
            <div className="headBg ">
              <h4>Name</h4>
            </div>
            <li className="list-group-item  justify-content-between align-items-center">
              <p className="text-dark p-1">Generic Nmae</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <p className="text-dark p-1">Generic Name</p>
            </li>

            <p> T&C*</p>
          </li>
        </ul>
    </>
  );
};

export default GenericTable;
