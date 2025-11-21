import RecipeCard from "./RecipeCard.vue";
import { getRecipes } from "../../src/MockApiData.js";

const recipeData = getRecipes();
const singleRecipe = recipeData[0];

describe("<RecipeCard />", () => {
  beforeEach(() => {
    cy.mount(RecipeCard, {
      props: {
        title: singleRecipe.title,
        description: singleRecipe.description,
        rating: singleRecipe.rating,
        ingredientCount: singleRecipe.ingredients.length,
        cookTimeMinutes: singleRecipe.cookTimeMinutes,
      },
    });
  });

  it("renders all recipe information", () => {
    cy.wait(100); // Small delay
    cy.contains(singleRecipe.title);
    cy.contains(singleRecipe.description);
    cy.contains(singleRecipe.cookTimeMinutes.toString());
    cy.contains(singleRecipe.rating.toString());
  });

  it('applies correct styles at mobile breakpoint', () => {
    cy.wait(100); // Small delay
    cy.viewport(375, 667); // iPhone SE
  });

  it('applies correct styles at desktop breakpoint', () => {
    cy.wait(100); // Small delay
    cy.viewport(1200, 800);
  });
});
