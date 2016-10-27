import $ from 'jquery';
import _ from 'lodash';

import { getNewsData, getSpecialData, getMenuData } from "./api";
import { placeMenu } from "./menu";

function placeNews (data) {

  var newsHTML = `
    Latest News
      <div class="newsTitle">${data.title}</div>
      <div class="newsDate">${data.date_published}</div>
      <div class="newsPost">${data.post} Read more...</div>
    `;
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
      Today's Special
        <div class="specialItem">${special[0].item}</div>
        <div class="specialPrice">${special[0].price}</div>
        <div class="specialDescription">${special[0].description}</div>
      `;
  $(".special").html(specialHTML);
  });
};
getSpecialData().then(placeSpecial);


$("#menuBar").click(placeMenu);
