import $ from 'jquery';
import _ from 'lodash';

function story(data) {

  var storyPic1 = `<img class="storyPic1" src="./images/drink-01.jpg">`;

  return `It all began on September 26, 2016, when Grace Lee and Matt Smith started their first cooking class at The Iron Yard in Atlanta, Georgia.  Their goal was to own not just any  restaurant, but a place where everyone, of all ages, could come and have great quality food.
    <br><br>
  There is great importanace to where every ingredients are grown, harvested and buchered in every dish we serve. Our most of the vegitables and herbs come straight from the restaurant's garden on a plot of land next to the establishment. Due to this, our dishes are seasonoal along with what we are able to harvest from our gardne. We handcraft almost everything we serve.
    <br><br>
    ${storyPic1}
    <br><br>
  Our food is not the only thing that is unique. From our friendly servers to the ambiance, we hope you enjoy every moment of your experience with us.
    <br><br>
  At Iron Cooks, our team has an incredible sense of pride in everything we do.  We value you, our neighborhood and the community that has made us to become solid estiablishment.`;

};

export { story };
