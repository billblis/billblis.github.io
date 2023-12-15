document.addEventListener("DOMContentLoaded", function () {
    var loaderWrapper = document.createElement("div");
    loaderWrapper.id = "loader-wrapper";
    loaderWrapper.innerHTML = `
        <div id="loader"></div>
        <div id="loader"></div>
        <div id="loader"></div>
        <div id="loader"></div>
        <div id="loader"></div>    
    `;
    
    document.body.appendChild(loaderWrapper);

    var loaders = document.querySelectorAll("#loader-wrapper #loader");

    setTimeout(function () {
        loaderWrapper.style.display = 'none';
    }, 3000);

    // Add bounce and colorChange classes to each loader
    loaders.forEach(function (loader, index) {
        loader.classList.add("bounce");
        loader.classList.add("colorChange");
        loader.style.animationDelay = 0.1 * index + "s";
    });
});
