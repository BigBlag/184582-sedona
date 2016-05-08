var link = document.querySelector(".search-title");
var searchForm = document.querySelector(".search-form");
var date = searchForm.querySelector("#check-in");
link.addEventListener("click", function(event) {
    event.preventDefault();
    if (searchForm.classList.contains("search-form-visible")) {
        searchForm.classList.add("search-form-invisible");
        searchForm.classList.remove("search-form-visible");
    } else {
        searchForm.classList.add("search-form-visible");
        searchForm.classList.remove("search-form-invisible");
    };
    date.focus();
});