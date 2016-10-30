import $ from 'jquery';
import _ from 'lodash';


function showTab (event) {
  var target = $(event.target);
  // console.log(target[0].id);
    if (target[0].id == "header1") {
      $(".detail1").addClass("detailShow");
      $(".detail2").removeClass("detailShow");
      $(".detail3").removeClass("detailShow");
  } else if (target[0].id == "header2") {
      $(".detail1").removeClass("detailShow");
      $(".detail2").addClass("detailShow");
      $(".detail3").removeClass("detailShow");
  } else if (target[0].id == "header3") {
      $(".detail1").removeClass("detailShow");
      $(".detail2").removeClass("detailShow");
      $(".detail3").addClass("detailShow");
  }
}

export { showTab };
