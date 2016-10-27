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
    var specialHMTL = data.filter(function(menuItem){
      return menuItem.id === specialItem;
  //   `
  //   Today's Special
  //     <img class="specialImg" src="src="./images/7793782462_d500393da4_b.jpg">
  //     <div class="specialName">${data.title}</div>
  //     <div class="specialPrice">${data.date_published}</div>
  //     <div class="speicalPost">${data.post}</div>
  // `;
  $(".special").html(placeItem);
}
};

getSpecialData().then(findSpecial)


$("#menuBar").click(placeMenu);
