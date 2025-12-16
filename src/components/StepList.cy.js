import StepList from "./StepList.vue";
import { getData } from "../apiFunctions.js";

describe("<StepList />", () => {
  let recipeData;

  before(async () => {
    // Använd async/await för att säkerställa att data laddas
    recipeData = await getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes");
  });

  it("renders recipe steps", () => {
    // Kontrollera att vi har data
    expect(recipeData).to.exist;
    expect(recipeData.length).to.be.greaterThan(0);
    
    const singleRecipe = recipeData[0];

    cy.mount(StepList, {
      props: {
        steps: singleRecipe.instructions,
      },
    });

    // Expect the same number of list items as instructions
    cy.get("li").should("have.length", singleRecipe.instructions.length);

    // Each instruction text should be rendered
    singleRecipe.instructions.forEach((instruction) => {
      cy.contains(instruction);
    });
  });
});
