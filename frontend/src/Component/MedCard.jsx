
const MedCard = (props) => {

  return (
    <>
      
        <div className="card p-2 ">
          <img src={props.imageSrc?"Image not found" :props.imageSrc } class="card-img-top" alt="Medicine Cover" />
          <div class="card-body ">
            <h5 class="card-title">Madicine Name: {props.name}</h5>
            <p class="card-text"><b>Generic Name:</b>  {props.generic_name}</p>
            <p class="card-text"><b>Dosage Forms:</b>  {props.Dosage_forms}</p>
            <p class="card-text"><b>Imprint:</b>  {props.Imprint}</p>
            <p class="card-text"><b>Color:</b>  {props.color}</p>
            <p class="card-text"><b>Shape:</b>  {props.shape}</p>



            {/* <a href={props.newsurl} target="blank" class="btn btn-sm btn-dark">
              Read More
            </a> */}
          </div>
        </div>
    </>
  );
};

export default MedCard;
