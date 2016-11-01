import $ from 'jquery';
import _ from 'lodash';

import { getNewsData, getSpecialData, getMenuData, getPhotoData } from "./api";
import { story } from "./story";
import { renderRes } from "./form";
import { showTab } from "./tabs";
import { iconTemplate, getIconInfo } from "./menuicon";

//obtain news from news API
function placeNews (data) {
  var newsHTML = `
    <div class="midHeader">Latest News
      <div class="title">${data.title}<span class="titlePrice">${data.date_published}</span></div>
      <div class="post">${data.post}</div>
    </div>`;
$(".news").html(newsHTML);
};
getNewsData().then(placeNews)

//obtain special of the day from special API
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

//place tab header click event on tabs.js onto the page
$(".header").click(showTab);

//place story items from story.js onto the page
$(".ourStory").html(story);

//place menu API tab items onto the page
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

//place form input items from forms.js onto the page
$(".reservations").append(renderRes);

//place photo on to the page
getPhotoData().then(function (photoData) {
  var photo = photoData.data.images;
  var pics6 = photo.splice(0,6);
  var link = pics6.map(function (object) {
      return `
      <img src="${object.link}">
      `});
  $(".foodPhoto").append(link);
});
