import $ from 'jquery';
import _ from 'lodash';

import { getMenuData } from "./api";

function placeApp (data) {
  var app =`
  <div class="apps">
    <div class="item">${data.appetizers.item}</div>
    <div class="description">${data.appetizers.description}</div>
    <div class="price">${data.appetizers.price}</div>
  </div>`;

  $(".menuApp").append(placeApp);
}
getMenuData().then(placeApp)

function placeEntree (data) {
  var entree =`
  <div class="entrees">
    <div class="item">${data.entrees.item}</div>
    <div class="description">${data.entrees.description}</div>
    <div class="price">${data.entrees.price}</div>
  </div>`;

  $(".menuEntree").append(placeEntree);
}
getMenuData().then(placeEntree)

function placeSide (data) {
  var side =`
  <div class="sides">
    <div class="item">${data.sides.item}</div>
    <div class="description">${data.sides.description}</div>
    <div class="price">${data.sides.price}</div>
  </div>`;

  $(".menuSide").append(placeSide);
}
getMenuData().then(placeSide)

function placeMenu (data) {
  var appHTML = data.map(placeApp);
  var entreeHTML = data.map(placeEntree);
  var sideHTML = data.map(placeSide);
  return `
    <h2 class="menuHeader">Our Dinner Selection</h2>
    <div class="menuApp">Appetizers${app}</div>
    <div class="menuEntree">Entree${entree}</div>
    <div class="menuSide">Appetizers${side}</div>
    `;

  $(".menu").html(placeMenu);
};

export { placeMenu };
