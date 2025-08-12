document.getElementById("homeLink").addEventListener("click", function(){
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("articleView").style.display = "none";
});
document.getElementById("blogLink").addEventListener("click", function(){
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("blogSection").style.display = "block";
    document.getElementById("articleView").style.display = "none";
    loadArticles();
});
document.getElementById("backToBlog").addEventListener("click", function(){
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("blogSection").style.display = "block";
    document.getElementById("articleView").style.display = "none";
});

function loadArticles(){
    fetch('articles.json')
    .then(response => response.json())
    .then(data => {
        let articlesList = document.getElementById("articlesList");
        articlesList.innerHTML = "";
        data.forEach((article, index) => {
            let div = document.createElement("div");
            div.textContent = article.title;
            div.addEventListener("click", function(){
                showArticle(article);
            });
            articlesList.appendChild(div);
        });
    });
}

function showArticle(article){
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("articleView").style.display = "block";
    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleContent").textContent = article.content;
}
