const searchMobile = async () => {
    // call id and get input value
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //clear search field value
    searchField.value = '';

    //set the url with https and make it *dynamic
    //and load the url by async await
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.data);
}

//display search result
const displaySearchResult = mobiles => {
    // console.log(mobiles);
    const searchResult = document.getElementById('search-result');
    // //clear all search result data
    // // searchResult.textContent = '';

    mobiles.forEach(mobile => {
        console.log(mobile);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${mobile.phone_name}</h5>
                    <h6 class="card-title text-center">${mobile.brand}</h6>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}