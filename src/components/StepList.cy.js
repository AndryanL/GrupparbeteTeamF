import StepList from "./StepList.vue";
import { getRecipes } from "../MockApiData.js";

const recipeData = getRecipes();

describe("<StepList />", () => {
  const singleRecipe = recipeData[0];

  it("renders recipe steps", () => {
    cy.mount(StepList, {
      props: {
        steps: singleRecipe.steps,
      },
    });

    // Expect the same number of list items as steps
    cy.get("li").should("have.length", singleRecipe.steps.length);

    // Each step text should be rendered
    singleRecipe.steps.forEach((step) => {
      cy.contains(step);
    });
  });
});
