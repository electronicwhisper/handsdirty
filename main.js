
function convertMarkdowns() {
  var els = document.querySelectorAll(".markdown");
  _.each(els, function (el) {
    var comment = _.find(el.childNodes, function (el) {
      return el.nodeType == Node.COMMENT_NODE;
    });
    var html = marked(comment.nodeValue, {
      smartypants: true
    });
    el.innerHTML = html;
  });
}

function convertHints() {
  var els = document.querySelectorAll("p");
  _.each(els, function (el) {

  });
}

$(function () {
  convertMarkdowns();
});