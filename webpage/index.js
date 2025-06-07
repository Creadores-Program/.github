function getUrlParams() {
    let params = {};
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}
function renderAsBloggerEntry(entry) {
    document.getElementById("TitlePage").innerHTML = entry.title;
    document.title = entry.title;
    document.getElementById("contentPage").innerHTML = entry.body;
    document.getElementById("pagesBase").style.display = "block";
}
function init() {
    let params = getUrlParams();
    if (params['page']) {
        let page = params['page'];
        let content;
        let title;
        if (page == "craftsmine.html"){
            title = "CraftsMine";
            content = require("pages/craftsmine.html");
        }else if(page == "creapro-bot.html"){
            title = "CreaPro Bot Discord";
            content = require("pages/creapro-bot.html");
        }else if(page == "creaprobot-guilded.html"){
            title = "CreaProBot Guilded";
            content = require("pages/creaprobot-guilded.html");
        }else{
            title = "Página no encontrada";
            content = "Error no se encontró la página solicitada!";
        }
        renderAsBloggerEntry({
            title: title,
            body: content
        });
    }
}
exports.load = init;