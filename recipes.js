$(document).ready(function () {
    $('#searchButton').on('click', function() {
        const searchValue = $('#searchValue').val();        
        getRecipies(searchValue);
    })
})

function getRecipies(searchValue) {
    const baseURL = 'https://api.spoonacular.com/recipes/complexSearch';
    const apiKey = 'c25e2d349ba842ee8186ded1ff30b942';

    $.ajax({
        url: `${baseURL}?query=${searchValue}&apiKey=${apiKey}`
    }).done(handleResponse);
};

function handleResponse(data) {
    data.results.forEach(recipe => {
        const searchResults = document.querySelector('.searchResults');
        
        const newItem = document.createElement('div');
        newItem.classList.add('recipe')
        newItem.innerHTML = `<h3>${recipe.title}</h3>
                            <a href="ingredients.html?id=${recipe.id}">
                            <img src=${recipe.image}></img></a>`;
        searchResults.appendChild(newItem)
    });
};
