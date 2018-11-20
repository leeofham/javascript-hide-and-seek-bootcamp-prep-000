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
  const grand = document.querySelector("#grand-node")
  const grandchild = grand.children;

  for (let i = 0; i < grandchild.length; i++){
    grand = grandchild;
    grandchild = grand.children[i]
    
  }
  return grand
}