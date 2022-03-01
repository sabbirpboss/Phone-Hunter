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
    displaySearchResult(data.data[0]);
}

//display search result
const displaySearchResult = mobile => {
    console.log(mobile);
}