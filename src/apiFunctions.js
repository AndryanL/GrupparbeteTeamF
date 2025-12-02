import fs from "fs";

export async function getData(apiUrl) {
  console.log("Get data from:", apiUrl);
  if (apiUrl == "" || apiUrl == undefined || apiUrl == null) {
    throw new Error("apiUrl is not defined");
  }
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const recipes = await response.json();
    console.log("Recipe Data:", recipes);
    return recipes;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getComments(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const comments = await response.json();
    console.log("Comment Data:", comments);
    return comments;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function postData(apiUrl, data) {
  console.log(data);
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(
          `HTTP error, status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((newRecipeData) => {
      console.log("New Recipe Data:", newRecipeData);
    })
    .catch((error) => {
      console.log(error);
      console.error("Error:", error.message);
    });
}

export async function postRating(apiUrl, data) {
  console.log(data);
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(
          `HTTP error, status: ${response.status} - ${response.statusText}`
        );
      }
      console.log("Rating submitted successfully. Score: " + data);
    })
    .catch((error) => {
      console.log(error);
      console.error("Error:", error.message);
    });
}

export async function patchData(apiUrl, data) {
  fetch(apiUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(
          `HTTP error, status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((patchedRecipeData) => {
      console.log("Patched Recipe Data:", patchedRecipeData);
    })
    .catch((error) => {
      console.log(error);
      console.error("Error:", error.message);
    });
}

export async function deleteData(apiUrl) {
  return fetch(apiUrl, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error, status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((deletedRecipeData) => {
      return deletedRecipeData;
    });
}

export async function deleteAllRecipes(apiUrl) {
  try {
    console.log("Hämtar recept från Api...");
    const recipes = await getData(apiUrl);

    const recipeIds = recipes.map((recipe) => recipe.id);
    console.log(`Hittade ${recipeIds.length} recept`);
    console.log("Recept-ids:" + recipeIds);

    console.log("Tar bort recepten från Api..");
    for (const recipeId of recipeIds) {
      try {
        await deleteData(`${apiUrl}/${recipeId}`);
        console.log(`✓ Recept med id: ${recipeId} borttaget!`);
      } catch (error) {
        console.error(
          `✗ Lyckades inte ta bort recept med id: ${recipeId}:`,
          error.message
        );
      }
    }

    console.log("Alla recept borttagna");
  } catch (error) {
    console.error("Något gick fel under borrtagningsprocessen", error);
  }
}

export async function postRecipesFromJSON(apiUrl, jsonFilePath) {
  try {
    console.log("Loading recipes from JSON file...");

    // Use fs to read the file instead of fetch
    const fileContent = fs.readFileSync(jsonFilePath, "utf8");
    const recipes = JSON.parse(fileContent);

    console.log(`Found ${recipes.length} recipes to import`);
    console.log("Importing recipes to API...");

    for (const recipe of recipes) {
      await postData(apiUrl, recipe);
      console.log(`✓ Imported: ${recipe.title}`);
    }

    console.log("Import completed successfully!");
  } catch (error) {
    console.error("Error during import process:", error);
  }
}
