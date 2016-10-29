import $ from 'jquery';
import _ from 'lodash';

import { getNewsData, getSpecialData, getMenuData, getPhotoData } from "./api";
import { story } from "./story";
import { renderRes } from "./form";
import { showTab } from "./tabs";

function placeNews (data) {
  var newsHTML = `
    <div class="midHeader">Latest News
      <div class="title">${data.title}         ${data.date_published}</div>
      <div class="post">${data.post} Read more...</div>
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
        <div class="title">${special[0].item} . . . . . . . . . . . . . . .  ${special[0].price}</div>
        <div class="post">${special[0].description}</div>
      </div>`;
  $(".special").html(specialHTML);
  });
};
getSpecialData().then(placeSpecial);

$(".ourStory").html(story);

getMenuData().then(function (results) {
  var parameters = Object.keys(results);
  // console.log(parameters);
  for (var i=0; i<parameters.length; i++){
    var app = results[parameters[i]].map(function (appItem) {
    return `
    <div class="${parameters[i]}">
      <div class="item">${appItem.item}</div>
      <div class="description">${appItem.description}</div>
      <div class="price">${appItem.price}</div>
    </div>`;
  });
  var menuHTML = `<div class="${parameters[i]}">` + app + "</div>";
  $(".menu").append(menuHTML);
}
});

$(".reservations").append(renderRes);

function placePhoto (photoData) {
    var photo = photoData.data.images;
    var link = photo.map(function (obj) {
      return `
      <img src="${obj.link}">
      `;
  })
  $(".foodPhoto").append(link);
};
getPhotoData().then(placePhoto);

$(".header").click(showTab);
