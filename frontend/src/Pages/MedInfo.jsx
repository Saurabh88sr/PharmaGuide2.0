import { Component } from "react";
import axios from "axios";

export default class MedInfo extends Component {
    constructor(props){
        super(props);
        this.state ={ usersCollection:[]};
    }
  componentDidMount() {

    const options = {
      method: "GET",
      url: "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo",
      params: { drug: "dolo" },
      headers: {
        "X-RapidAPI-Key": "4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6",
        "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return <>
    
    </>;
  }
}
