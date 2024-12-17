if (location.href == location.origin + "/" || location.href.endsWith("/index.html") || location.href.endsWith("/index")) {
var tmp = undefined;
var repos = [];
var gists = [];

(async () => {
    tmp = await fetch('https://api.github.com/users/y2k04/repos?sort=pushed').then(response => response.json());
})().then(()=>{
    for(var i = 0; i < tmp.length && repos.length != 5; i++) {
        if(!tmp[i].fork)
            repos.push(tmp[i]);
    }

    for (var i = 0; i < repos.length; i++) {
        var el = document.createElement("div");
        el.innerHTML = `<div class="content"><a class="header" href="${repos[i].html_url}">${repos[i].name}</a><div class="description">${repos[i].description}</div></div>`;
        el.className = "item";
        document.getElementById("latestRepos").appendChild(el);
    }
});

tmp = null;

(async () => {
    gists = await fetch('https://api.github.com/users/y2k04/gists?per_page=5').then(response => response.json());
})().then(()=>{
    for (var i = 0; i < gists.length; i++) {
        var el = document.createElement("div");
        el.innerHTML = `<div class="content"><a class="header" href="${gists[i].url}">${Object.keys(gists[i].files)[0]}</a><div class="description">${gists[i].description}</div></div>`;
        el.className = "item";
        document.getElementById("latestGists").appendChild(el);
    }
});
}