function getFirstSelector(selector) {
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget(){
  var nestedTarget = document.getElementById('nested').querySelector('div div div')
  return nestedTarget
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode= node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
     }
return node
}
