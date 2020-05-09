import "./article-list.js";
import articles from "./articles.js";

const containerElement = document.querySelector(".container");

const articleItemElement = document.createElement("article-list");
articleItemElement.articles = articles;

containerElement.appendChild(articleItemElement);
