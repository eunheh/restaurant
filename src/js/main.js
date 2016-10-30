import $ from 'jquery';
import _ from 'lodash';

import { getNewsData, getSpecialData, getMenuData, getPhotoData } from "./api";
import { story } from "./story";
import { renderRes } from "./form";
import { showTab } from "./tabs";
import { iconTemplate, menuIcon } from "./menuicon";

function placeNews (data) {
  var newsHTML = `
    <div class="midHeader">Latest News
      <div class="title">${data.title}<span class="titlePrice">${data.date_published}</span></div>
      <div class="post">${data.post}</div>
    </div>`;
$(".news").html(newsHTML);
};
getNewsData().then(placeNews)

function placeSpecial (data) {
    var specialItem = `${data.menu_item_id}`;
    // console.log(specialItem);
    getMenuData().then(function(menuData){
      var special = menuData.entrees.filter(function(menuItem){
        // console.log(menuItem.id);
        return menuItem.id === Number(specialItem);
      })
      // console.log(special);
    var specialHTML = `
      <div class="midHeader">Today's Special
        <img class="specialPic" src="./images/Seared_Scallops.jpg">
        <div class="title">${special[0].item} . . . . . . . . . . . . . . . ${special[0].price}</div>
        <div class="post">${special[0].description}</div>
      </div>`;
  $(".special").html(specialHTML);
  });
};
getSpecialData().then(placeSpecial);

$(".header").click(showTab);
$(".ourStory").html(story);

getMenuData().then(function (results) {
  var parameters = Object.keys(results);
  // console.log(parameters);
  for (var i=0; i<parameters.length; i++){
    var app = results[parameters[i]].map(function (appItem) {
    return `
    <div class="${parameters[i]}">
      <div class="item">${appItem.item}
      <span class="price">${appItem.price}</span></div>
      <div class="description">${appItem.description}<span class="icons">${iconTemplate}</span></div>
    </div>`;
  });

  var newApp = app.join("");
  var appHTML = `<div class="menuType">${parameters[i]}
  <div class="${parameters[i]}"></div>` + newApp + "</div>";

  $(".menu").append(appHTML);
}
});

$(".icon").click(menuIcon);

$(".reservations").append(renderRes);

getPhotoData().then(function (photoData) {
  var photo = photoData.data.images;
  var link = photo.map(function (object) {
      return `
      <img src="${object.link}">
      `});
      console.log(link);

  $(".foodPhoto").append(link);

});
