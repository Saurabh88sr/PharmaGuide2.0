import Card from "./Card";
import Footer from "./Footer";
import Newsbar from "./Newsbar";
import Compare from "../img/Compare.svg";
import Condition from "../img/Conditon.svg";
import Feedback from "../img/Feedback.svg";
import List from "../img/List.svg";
import News from "../img/News.svg";
import pill from "../img/pill.svg";

const Dashboard = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="/BMI" id="about">
          BMI
        </a>
      </div>
      <div className="board">
        <div className="board-row">
          <a className="nav-link" href="/MedicineCompare">
            <Card
              feature="Medicine Compare"
              src={Compare}
              alt="My Image"
              description="Search your Mecidine, Provide alternate Medicine
              Display Parallel information 
              "
            />
          </a>
          <a className="nav-link" href="/Drugsearch">
            <Card
              feature="Medicine by Condition"
              imageSrc="img\syringe.png"
              src={Condition}
              alt="My Image"
              description="Find the Medicine for your health condition"
            />
          </a>
        </div>
        <div className="board-row">
          <a className="nav-link" href="/Identifier">
            <Card
              feature="Pill Identifier "
              imageSrc="img\syringe.png"
              src={pill}
              alt="My Image"
              description="Identify your Medicine by Shape, Color and Imprint Number"
            />
          </a>
          <a className="nav-link" href="/FAQ">
            <Card
              feature="Question & Answer"
              imageSrc="img\syringe.png"
              src={Feedback}
              alt="My Image"
              description="Ask the Question for the Experts advise"
            />
          </a>
        </div>
        <div className="board-row">
          <a className="nav-link" href={isLoggedIn ? "/MyList" : "/Login"}>
            <Card
              feature="My List"
              src={List}
              alt="My Image"
              description="See Saved List of Medicine
              Saved List of Medical News
              "
            />
          </a>{" "}
          <a className="nav-link" href="/MainNews">
            <Card
              feature="Health News"
              imageSrc="img\syringe.png"
              src={News}
              alt="My Image"
              description="Look at the news of Health Sector"
            />
          </a>
        </div>
      </div>
      <Newsbar />
      <Footer />
    </>
  );
};

export default Dashboard;
