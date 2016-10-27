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
console.log(getMenuData());

//get imgurPhoto API data
// $.ajaxSetup({
//   headers: {
//     Authorization: `Client-ID ${imgur_TOKEN}`
//   }
// });
//
// function getPhotoData () {
//   return $.ajax({
//     url: `http://api.imgur.com/3/gallery/album/`,
//     data: {
//       id:'0lqc1'
//     }
//   });
// };
// // console.log(getPhotoData());



export { getNewsData, getSpecialData, getMenuData };
