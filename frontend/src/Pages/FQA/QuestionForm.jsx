const QuestionForm = () => {
  return (
    <>
    <div className="container w-75 mt-4 cardcolor p-5">
    <form className="p-3">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Subject</label>
    <input type="text" class="form-control" id="subject"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Write your Question</label>
    <textarea class="form-control" name="non" id="" cols="5" rows="5"></textarea>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>


    </>
  );
};

export default QuestionForm;
