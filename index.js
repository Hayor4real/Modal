let searchInput = document.getElementById("searchInput")

    searchInput.addEventListener("keyup", function(event){
    let search = event.target.value.toLowerCase();
    let searchFromDom = document.getElementsByClassName("name");

    for (let counter = 0; counter < searchFromDom.length; counter++){
      const currentValue =  searchFromDom[counter].textContent.toLowerCase();

    if (currentValue.includes(search)) {
        searchFromDom[counter].style.display = "block"
    }
    else {
        searchFromDom[counter].style.display = "none";
    }
    }
    
});

