const ListDesk = (props) => {
  return (
    <>
      <div className="container mt-3 p-2">
        <div className="d-flex">
          <div>
            <ul className="list-group">
              <li className=" d-flex justify-content-between align-items-center">
                <div className="">
                  {" "}
                  <h3>{props.name}</h3>{" "}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <a href="/Medlist">Medicine</a>
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="/Newslist">News</a>
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDesk;
