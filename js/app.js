const searchMobile = async () => {
  // call id and get input value
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  //clear search field value
  searchField.value = "";

  //set the url with https and make it *dynamic
  //and load the url by async await
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displaySearchResult(data.data);
};

//display search result
const displaySearchResult = (mobiles) => {
  // console.log(mobiles);
  const searchResult = document.getElementById("search-result");
  //clear all search result data
  searchResult.textContent = "";

  mobiles.forEach((mobile) => {
    // console.log(mobile);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div id="card-custom-bg" class="card text-white">
                <img id="search-result-image" src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body card-body-color">
                    <h5 class="card-title text-center">${mobile.phone_name}</h5>
                    <h6 class="custom-brand-color card-title text-center">${mobile.brand}</h6>
                    <a onclick="loadMobileDetail('${mobile.slug}')" id="explore-btn-custom-color" href="#" class="btn btn-success w-100">Explore</a>
                </div>
            </div>
        `;
    searchResult.appendChild(div);
  });
};

//get mobile detail by mobile id
const loadMobileDetail = async (id) => {
  //  console.log(mobileId);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayMobileDetail(data.data);
};

const displayMobileDetail = mobile => {
    console.log(mobile);
    const mobileDetails = document.getElementById('mobile-details');
    //clear all result
    mobileDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <h5 class="card-title bg-info">${mobile.name}</h5>
            <img src="${mobile.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">${mobile.releaseDate}</p>
                <p class="card-text text-primary">${mobile.mainFeatures.storage}</p>
                <p class="card-text text-primary">${mobile.slug}</p>
                <p class="card-text text-warning">${mobile.brand}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    `;
    mobileDetails.appendChild(div);
}