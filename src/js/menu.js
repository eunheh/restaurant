import $ from 'jquery';
import _ from 'lodash';

import { getMenuData } from "./api";

// //appetizers
// getMenuData().then(function (results) {
//   var parameters = Object.keys(results);
//   console.log(parameters);
//   var app = results.appetizers.map(function (appItem) {
//
//   return `
//   <div class="apps">
//     <div class="item">${appItem.item}</div>
//     <div class="description">${appItem.description}</div>
//     <div class="price">${appItem.price}</div>
//   </div>`;
//
//   });
//   console.log(app);
//   // $(".menu").append(app)
// });
//
// //entrees
// getMenuData().then(function (results) {
//   var entree = results.entrees.map(function (entreeItem) {
//
//   return `
//   <div class="apps">
//     <div class="item">${entreeItem.item}</div>
//     <div class="description">${entreeItem.description}</div>
//     <div class="price">${entreeItem.price}</div>
//   </div>`;
//
//   });
//   console.log(entree);
//   // $(".menu").append(entree)
// });
//
// //sides
// getMenuData().then(function (results) {
//   var side = results.sides.map(function (sideItem) {
//
//   return `
//   <div class="apps">
//     <div class="item">${sideItem.item}</div>
//     <div class="description">${sideItem.description}</div>
//     <div class="price">${sideItem.price}</div>
//   </div>`;
//
//   });
//   console.log(side);
//   // $(".menu").append(side)
// });
//
function placeMenu (app, entree, side) {
  $(".menu").append(app);
  $(".menu").append(entree);
  $(".menu").append(side);
}

export { placeMenu };
