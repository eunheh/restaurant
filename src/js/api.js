import $ from 'jquery';
import _ from 'lodash';

//get news API data
function getNewsData (news) {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/news/1`,
  });
};
console.log(getNewsData());

//get special API data
function getSpecialData () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/special/1`,
  });
};
console.log(getSpecialData());

//get menu API data
function getMenuData () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/1`,
  });
};
console.log(getMenuData());

//get photo API data
function getPhotoData () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/1`,
  });
};
console.log(getPhotoData());



export {getNewsData, getSpecialData, getMenuData, getPhotoData};
