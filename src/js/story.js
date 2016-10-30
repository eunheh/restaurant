import $ from 'jquery';
import _ from 'lodash';

function story(data) {

  var storyPic1 = `<img class="storyPic1" src="./images/drink-01.jpg">`;

  return `It all began on September 26, 2016, when Grace Lee and Matt Smith started their first cooking class at The Iron Yard in Atlanta, Georgia. Their goal was to own not just any restaurant, but a place where anyone could come and experience food of the finest quality.
    <br><br>
  We place a high value on every dish we serve and ensure that the ingredients are grown and harvested with the utmost care. Our vegetables, herbs, and choice meats are responsibly raised and sourced directly from local farms.  Because of this, our menu changes with the seasons.
    <br><br>
    ${storyPic1}
    <br><br>
  The food is always fresh and never frozen and is not the only thing that is unique about our restaurant.  Our friendly servers and welcoming atmosphere will guarantee that you enjoy every moment of your experience with us. At Iron Cooks, our team has an incredible
  sense of pride in everything we do. We value you, our neighborhood and the people of this community and are proud to serve you.`;

};

export { story };
