import $ from 'jquery';

var iconTemplate = `
  <ul class="iconList">
    <li><img class="icon" class="allergyIcon" src="./images/exclamation.png"></li>
    <li><img class="icon" class="veganIcon" src="./images/broccoli.png"></li>
    <li><img class="icon" class="spicyIcon" src="./images/chili.png"></li>
    <li><img class="icon" class="favIcon" src="./images/star.png"</li>
  </ul>`;



// function menuIcon (event) {
//   var target = $(event.target);
//   // console.log(target[0].id);
//     if (target[0].id == "icon1") {
//       $(".detail1").addClass("detailShow");
//       $(".detail2").removeClass("detailShow");
//       $(".detail3").removeClass("detailShow");
//   } else if (target[0].id == "icon2") {
//       $(".detail1").removeClass("detailShow");
//       $(".detail2").addClass("detailShow");
//       $(".detail3").removeClass("detailShow");
//   } else if (target[0].id == "icon3") {
//       $(".detail1").removeClass("detailShow");
//       $(".detail2").removeClass("detailShow");
//       $(".detail3").addClass("detailShow");
//   }
// }
//
// $(".icon").click(menuIcon);

export { iconTemplate };
