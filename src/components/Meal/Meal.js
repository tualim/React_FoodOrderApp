import React, { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";

const Meal = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meal;
