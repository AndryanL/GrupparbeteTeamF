import RecipeCard from "./RecipeCard.vue";
import recipeData from "../../src/MockApiData.js";

describe("<RecipeCard />", () => {
  it("renders recipe title and description", () => {
    cy.mount(RecipeCard, {
      props: {
        recipe: recipeData,
      },
    });

    // Assert title and description are displayed
    cy.contains(recipeData.title).should("be.visible");
    cy.contains(recipeData.description).should("be.visible");
  });

  it("renders all recipe information", () => {
    cy.mount(RecipeCard, {
      props: {
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
  });
});
