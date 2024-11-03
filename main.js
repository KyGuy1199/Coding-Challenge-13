//Task 2: Fetch Products from the API Using Fetch and Promises

const apiEndpoint = "https://www.course-api.com/javascript-store-products";
const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

fetch(apiEndpoint)
    .then((response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        displayProducts(data);
    })
    .catch((error) => {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Products failed to load, please try again later.";
        console.error("Fetch error:", error);
    });