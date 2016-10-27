import $ from 'jquery';
import _ from 'lodash';

import { getNewsData, getSpecialData } from "./api";
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

// function placeSpecial (data) {
//   var specialHMTL = `
//   Today's Special
//     <img src="">
//     <div class="specialName"></div>
//     <div class="specialPrice"></div>
//     <div class="speicalPost"></div>
//   `;
//   $(".special").html(newsHTML);
// };
// getSpecialData().then(placeSpecial)

$("#menuBar").click(placeMenu);
