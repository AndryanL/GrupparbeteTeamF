import RecipeCard from "./RecipeCard.vue";
import { getRecipes } from "../../src/MockApiData.js";

const recipeData = getRecipes();

describe("<RecipeCard />", () => {

  const singleRecipe = recipeData[0];
  console.log(singleRecipe)

  it("renders recipe title and description", () => {
    cy.mount(RecipeCard, {
      props: {
        title: singleRecipe.title,
        description: singleRecipe.description,
        rating: singleRecipe.rating,
        ingredientCount: singleRecipe.ingredients.length,
        cookTimeMinutes: singleRecipe.cookTimeMinutes,
      },
    });

    // Assert title and description are displayed
    cy.contains(singleRecipe.title).should("be.visible");
    cy.contains(singleRecipe.description).should("be.visible");
  });

  /* it("renders all recipe information", () => {
    cy.mount(RecipeCard, {
      props: {
        recipeId: recipeData.id,
        recipe: recipeData,
      },
    });

    // Test various properties
    cy.contains(recipeData.title); // "Svart vinbär och portvinskladdkaka"
    cy.contains(recipeData.description); // "En sofistikerad vuxenkladdkaka..."
    cy.contains(recipeData.cookTimeMinutes.toString()); // "15"
    cy.contains(recipeData.rating.toString()); // "3.2"

    // Test categories
    recipeData.categories.forEach((category) => {
      cy.contains(category);
    });
  }); */
});
