function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("div#nested .target")
}

function increaseRankBy(n){
    var sum = (document.querySelectorAll("ul.ranked-list li"))
    sum = parseInt(sum) + n
}
