export async function getData(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok ");
      }
      return response.json();
    })
    .then((recipeData) => {
      console.log("Recipe Data:", recipeData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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
  fetch(apiUrl, {
    method: "DELETE",
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
    .then((deletedRecipeData) => {
      console.log("Deleted Recipe Data:", deletedRecipeData);
    })
    .catch((error) => {
      console.log(error);
      console.error("Error:", error.message);
    });
}
