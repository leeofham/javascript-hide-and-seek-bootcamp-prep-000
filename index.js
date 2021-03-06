function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("div#nested .target");
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++){
    var lis = rankedLists[i].children;

    for (let a = 0; a < lis.length; a++){
      lis[a].innerHTML = parseInt(lis[a].innerHTML) + n;
    }
  }
}


function deepestChild(){
  var fifo = document.querySelector("#grand-node") // first child in first child out
  var grandChild = fifo.children[0]              //

  while(grandChild){
    fifo = grandChild
    grandChild = fifo.children[0]
  }
return fifo;

}
