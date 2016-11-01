import $ from 'jquery';

import { getMenuData } from "./api";

var iconTemplate = `
  <ul class="iconList">

    <li class="icon1"><img class="icon" id="allergyIcon" src="./images/exclamation.png"><div class="disclosure1">This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.</div></li>

    <li class="icon2"><img class="icon icon2" id="veganIcon" src="./images/broccoli.png"><div class="disclosure2">This item contains no meat and has been prepared without the use of animal products.</div></li>

    <li class="icon3"><img class="icon icon3" id="spicyIcon" src="./images/chili.png"><div class="disclosure3">This item is spicy, please handle with care and drink lots of water.</div></li>

    <li class="icon4"><img class="icon icon4" id="favIcon" src="./images/star.png"><div class="disclosure4">We have been doing this a long time and this item has become one of our favorites.</div></li>

  </ul>`;

function getIconInfo (icons) {
  var appIcon = icons.appetizers;
  var entreeIcon = icons.entrees;
  var sideIcon = icons.sides;

  console.log(appIcon);
  console.log(entreeIcon);
  console.log(sideIcon);

  if (appIcon.allergies === 1) {
    return `${icon1}`
  }
  if (appIcon.vegan === 1) {
    return `${icon2}`
  }
  if (appIcon.spicy === 1) {
    return `${icon3}`
  }
  if (appIcon.favorites === 1) {
    return `${icon4}`
  }

};


getMenuData().then(getIconInfo);

export { iconTemplate, getIconInfo };
