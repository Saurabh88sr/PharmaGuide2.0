
const MedCardInfo = (props) => {

    return (
      <>
        
          <div className="card p-2 ">
            <img src={props.imageSrc?"Image not found" :props.imageSrc } class="card-img-top" alt="Medicine Cover" />
            <div class="card-body ">
              <h5 class="card-title text-primary">Madicine Name : {props.name}</h5>
              <p class="card-text"><b>Quantity :</b>  {props.quantity}</p>
              <p class="card-text "><b>Generic Name :</b>  {props.generic_name}</p>
              <p class="card-text text-danger"><b>Price :</b>  {props.price}</p>
              <p class="card-text"><b>Dosage Forms :</b>  {props.Dosage_forms}</p>
              <a href={props.newsurl} target="blank" class="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
      </>
    );
  };
  
  export default MedCardInfo;
  