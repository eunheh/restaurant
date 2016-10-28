import $ from 'jquery';
import _ from 'lodash';
import {imgur_TOKEN} from './imgur';

//get news API data
function getNewsData () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/news/1",
  });
};
// console.log(getNewsData());

//get special API data
function getSpecialData () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/special/1",
  });
};
// console.log(getSpecialData());

//get menu API data
function getMenuData () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/1",
  });
};
// console.log(getMenuData());

// get imgurPhoto API data
function getPhotoData () {
  return $.ajax({
    headers: {
      Authorization: `Client-ID ${imgur_TOKEN}`},
    url:`https://api.imgur.com/3/gallery/GC0q0`,
  });
};
console.log(getPhotoData());

export { getNewsData, getSpecialData, getMenuData, getPhotoData };
