import React, { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [weightError, setWeightError] = useState(false);

  function calculateBmi() {
    if (weight && height && weight > 0 && weight <= 500) {
      const bmiValue = (weight / (height / 100) ** 2).toFixed(2);
      setBmi(bmiValue);
      setWeightError(false);
    } else {
      setBmi(null);
      setWeightError(true);
    }
  }

  function getBmiStatus() {
    if (bmi && bmi < 18.5) {
      return "underweight";
    } else if (bmi && bmi >= 18.5 && bmi <= 24.9) {
      return "normal weight";
    } else if (bmi && bmi >= 25 && bmi <= 29.9) {
      return "overweight";
    } else if (bmi && bmi >= 30) {
      return "obese";
    } else {
      return "";
    }
  }
  function getSuggestedWeightRange() {
    // toFixed(2) is used to round a number to 2 decimal places and return it as a string
    const lowerLimit = (18.5 * (height / 100) ** 2).toFixed(2);
    const upperLimit = (24.9 * (height / 100) ** 2).toFixed(2);
    const maxWeightLoss = (weight - upperLimit).toFixed(2);
    const maxWeightGain = (lowerLimit - weight).toFixed(2);
    let suggestion = `Lower Limit of Weight ${lowerLimit} kg | Upper Limit of Weight ${upperLimit} kg`;
    if (bmi && bmi < 18.5) {
      suggestion += ` :-----( ${maxWeightGain} kg to gain for a healthy BMI )`;
    } else if (bmi && bmi >= 25) {
      suggestion += ` (${maxWeightLoss} kg to lose for a healthy BMI)`;
    }
    return suggestion;
  }

  return (
    <>
      <div className="container w-50 mt-4 cardcolor p-5">
        <h1>Body Mass Index Calculator</h1>
        <div className="form-group p-3">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className={`form-control${weightError ? " is-invalid" : ""}`}
          />
          {weightError && (
            <div className="invalid-feedback">Please enter a valid weight.</div>
          )}
        </div>
        <div className="form-group p-3">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={calculateBmi} className="btn btn-dark">
          Calculate BMI
        </button>
        {bmi && (
          <p className="mt-3 p-2 bg-light">
            Your BMI is <strong>{bmi}</strong>, which is considered{" "}
            <strong>{getBmiStatus()}</strong>
            <p className="mt-3 p-2 bg-light">`{getSuggestedWeightRange()}.</p>
          </p>
        )}
      </div>
      <div className="container p-4 mt-4 w-75 bg-light">
        <h3 className="headBg"> What is Body mass index (BMI) ?</h3>
        <p className="text-dark ">
         <b>Body mass index (BMI) </b> is a value derived from the mass (weight) and
          height of a person. The BMI is defined as the body mass divided by the
          square of the body height, and is expressed in units of kg/m2,
          resulting from mass in kilograms and height in metres. The BMI may be
          determined using a table or chart which displays BMI as a function
          of mass and height using contour lines or colours for different BMI
          categories, and which may use other units of measurement (converted to
          metric units for the calculation). The BMI is a convenient rule of
          thumb used to broadly categorize a person as underweight, normal
          weight, overweight, or obese based on tissue mass (muscle, fat, and
          bone) and height. Major adult BMI classifications are underweight
          (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to
          29.9), and obese (30 or more).When used to predict an individual's
          health, rather than as a statistical measurement for groups, the BMI
          has limitations that can make it less useful than some of the
          alternatives, especially when applied to individuals with abdominal
          obesity, short stature, or unusually high muscle mass. BMIs under 20
          and over 25 have been associated with higher all-cause mortality, with
          the risk increasing with distance from the 20–25 range.
        </p>
      </div>
    </>
  );
}

export default BmiCalculator;
