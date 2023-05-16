const DrugTable = (props) => {
  return (
    <>
      <div className="container justify-content-md-center ">
        <ul className="list-group">
          <li className="list-group-item justify-content-between align-items-center">
            <div className="headBg  ">
              <h4>{props.genrName}</h4>{" "}
            </div>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Generic Name</div>
              <p className="text-dark p-1">{props.genrName}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Price</div>
              <p className="text-dark p-1">{props.price}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Dogse Form</div>
              <p className="text-dark p-1">{props.dosge}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Product Type</div>
              <p className="text-dark p-1">{props.productType}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Ingredients</div>
              <p className="text-dark p-1">{props.ingredients}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Brand Name</div>
              <p className="text-dark p-1">{props.brand}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Brand Base Name</div>
              <p className="text-dark p-1">{props.brandBaseName}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Labeler Name</div>
              <p className="text-dark p-1">{props.labeler}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">National Drug Code</div>
              <p className="text-dark p-1">{props.NDC}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Pharma Route</div>
              <p className="text-dark p-1">{props.route}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Pharma Class</div>
              <p className="text-dark p-1">{props.pharmaClass}</p>
            </li>
            <li className="list-group-item  justify-content-between align-items-center">
              <div className="drugInfoTag bg-primary">Package Description</div>
              <p className="text-dark p-1">{props.description}</p>
            </li>
            <p> T&C*</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DrugTable;
