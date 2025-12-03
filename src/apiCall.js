import { postRecipesFromJSON } from "./apiFunctions.js";

/*Example JSON-data from API: 
  {
  title: "string",
  description: "string",
  imageUrl: "string",
  timeInMins: 0,
  categories: ["string"],
  instructions: ["string"],
  ingredients: [
    {
      name: "string",
      amount: 0,
      unit: "string",
    },
  ],
  ratings: [],
  } */

/* const jsonData = {
  title: "Kokos\u00ADolja och passions\u00ADfrukts\u00ADkladd\u00ADkaka",
  description:
    "Denna tropiska kladdkaka kombinerar krämig kokosnötsolja med syrlig passionsfrukt för en exotisk smakupplevelse som tar dig direkt till paradiset.",
  imageUrl: "string",
  timeInMins: 15,
  categories: ["Tropiska kladdkakor", "Veganska kladdkakor"],
  instructions: [
    "Sätt ugnen på 175°C",
    "Smält kokosnötsoljan",
    "Skrapa ur passionsfrukterna",
    "Vispa ägg och socker",
    "Rör i olja och passionsfrukt",
    "Blanda i mjöl och kakao",
    "Grädda i 22 minuter",
  ],
  ingredients: [
    {
      name: "kokosnötsolja",
      amount: 100,
      unit: "g",
    },
    {
      name: "ägg",
      amount: 2,
      unit: "st",
    },
    {
      name: "strösocker",
      amount: 2,
      unit: "dl",
    },
    {
      name: "vetemjöl",
      amount: 1.5,
      unit: "dl",
    },
    {
      name: "kakao",
      amount: 3,
      unit: "msk",
    },
    {
      name: "passionsfrukter",
      amount: 2,
      unit: "st",
    },
  ],
  ratings: [3],
}; */

/* getData(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"
); */

/* postData(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes",
  jsonData
); */

/* deleteData(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes/ada5af13-9aa5-48b5-ac62-0567680aced6"
); */

/* deleteAllRecipes(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"
); */

postRecipesFromJSON(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes",
  "./recipes.json"
);

/* deleteAllCategories(
  "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/categories"
); */
