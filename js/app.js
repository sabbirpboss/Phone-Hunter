document.getElementById("error").style.display = "none";

const searchMobile = async () => {
  // call id and get input value
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  //clear search field value
  searchField.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displaySearchResult(data.data);
};

//display search result
const displaySearchResult = (mobiles) => {
  // console.log(mobiles);
  if (mobiles.length == 0) {
    document.getElementById("error").style.display = "block";
    document.getElementById("search-result").innerHTML = "";
    document.getElementById("mobile-details").innerHTML = "";
  } else {
    const searchResultSlice = mobiles.slice(0, 20);

    const searchResult = document.getElementById("search-result");
    document.getElementById("error").style.display = "none";
    document.getElementById("search-field").value = "";
    //clear all search result data
    searchResult.textContent = "";

    searchResultSlice.forEach((mobile) => {
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
  }
};

//get mobile detail by mobile id
const loadMobileDetail = async (id) => {
  //  console.log(mobileId);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayMobileDetail(data.data);
};

const displayMobileDetail = (mobile) => {
  // console.log(mobile);
  const mobileDetails = document.getElementById("mobile-details");
  //clear all result
  mobileDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <div class="row g-0 single-card-style"> 
        <h5 class="card-title mobile-name-custom-bg">${mobile.name}</h5>
        <div class="col-md-4">
            <img src="${
              mobile.image
            }" class="img-fluid single-item-image rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">${
                  mobile.releaseDate ? mobile.releaseDate : "comming soon"
                }</p>
                <p class="card-text">${mobile.mainFeatures.displaySize}</p>
                <p class="card-text">${mobile.mainFeatures.storage}</p>
                <p class="card-text">${mobile.mainFeatures.chipSet}</p>
                <p class="card-text">${mobile.mainFeatures.memory}</p>
                <p class="card-text text-white">Sensors: ${
                  mobile.mainFeatures.sensors[0]
                }, ${mobile.mainFeatures.sensors[1]}, ${
    mobile.mainFeatures.sensors[2]
  }, ${mobile.mainFeatures.sensors[3]}, ${mobile.mainFeatures.sensors[4]}, ${
    mobile.mainFeatures.sensors[5]
  }, ${mobile.mainFeatures.sensors[6]}.</p>
                <p class="card-text text-white">Others: Bluetooth: ${
                  mobile.others ? mobile.others.Bluetooth : "Not Yet Found"
                }, GPS: ${
    mobile.others ? mobile.others.GPS : "Not Yet Found"
  }, NFC:${mobile.others ? mobile.others.NFC : "Not Yet Found"}, Radio: ${
    mobile.others ? mobile.others.Radio : "Not Yet Found"
  }, USB: ${mobile.others ? mobile.others.USB : "Not Yet Found"}, WLAN: ${
    mobile.others ? mobile.others.WLAN : "Not Yet Found"
  }.</p>
                <p class="card-text text-dark fw-bold text-uppercase">${
                  mobile.brand
                }</p>
                <p class="card-text text-primary"><small class="text-muted">Tags: ${
                  mobile.slug
                }</small></p>
            </div>
        </div>
    </div>
    `;
  mobileDetails.appendChild(div);
};

document.getElementById("button-search").addEventListener("click", function () {
  const mobileDetails = document.getElementById("mobile-details");
  mobileDetails.textContent = "";
});
