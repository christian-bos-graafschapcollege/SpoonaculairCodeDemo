$(document).ready(() => {
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id'); 

    const baseURL = 'https://api.spoonacular.com/recipes';
    const apiKey = 'c25e2d349ba842ee8186ded1ff30b942';

    $.ajax({
        url: `${baseURL}/${id}/information?apiKey=${apiKey}`
    }).done(handleResponse);
});

function handleResponse(data) {
    // list recipe name and photo`
    $('.recipe').append(`<h3 class="recipe-name">${data.title}</h3><img src="${data.image}"></img>`);

    // loop over ingredients
    data.extendedIngredients.forEach(ingredient => {
        $('.ingredients').append(`
            <div class="ingredient">
                <h3>${ingredient.name}</h3>
                <img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}"></img>
                <p>${ingredient.amount} ${ingredient.unit}</p>
            </div>`);
    })
};
