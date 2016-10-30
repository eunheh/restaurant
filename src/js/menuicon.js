import $ from 'jquery';

var iconTemplate = `
  <ul class="iconList">
    <li><img class="icon icon1 disclosure1" id="allergyIcon" src="./images/exclamation.png"></li>
    <li><img class="icon icon2 disclosure2" id="veganIcon" src="./images/broccoli.png"></li>
    <li><img class="icon icon3 disclosure3" id="spicyIcon" src="./images/chili.png"></li>
    <li><img class="icon icon4 disclosure4" id="favIcon" src="./images/star.png"</li>
  </ul>`;

function menuIcon (event) {
  var target = $(event.target);
  console.log(target[0].id);

  var disclosure1 = `<div class="disclosure1">This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.</div>`
  var disclosure2 = `<div class="disclosure2">This item contains no meat and has been prepared without the use of animal products.</div>`
  var disclosure3 = `<div class="disclosure3">This item is spicy, please handle with care and drink lots of water.</div>`
  var disclosure4 = `<div class="disclosure4">We have been doing this a long time and this item has become one of our favorites.</div>`

    if (target[0].id == "allergyIcon") {
      $(".icon1").addClass("disclosure1");
  } else if (target[0].id == "veganIcon") {
      $(".icon2").addClass("disclosure2");
  } else if (target[0].id == "spicyIcon") {
      $(".icon3").addClass("disclosure3");
  } else if (target[0].id == "favIcon") {
      $(".icon4").addClass("disclosure4");
  }

}

export { iconTemplate, menuIcon};
