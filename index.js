function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("div#nested .target")
}

function increaseRankBy(n){
  var lis = document.querySelectorAll("ul.ranked-list li")

  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML += parseInt(n)
  }

}
