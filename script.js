function addArticles(){
  var ul = document.getElementById('articles-container');
  for (var i = 0; i < 10; i++) {
    ul.appendChild(createArticles());
  }
}




function createArticles(){
  var li, a, time, date = new Date(), h2,p;

  li = createAndSetAttr('li',{class:'article'});
  a = createAndSetAttr('a',{class:'article-preview', title:'test'});

  time = createAndSetAttr('time',{class:'article-date', datetime: date});
  setText(time, ['January', 'February', 'March', 'April','June','July','August','September','October','November','December'][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear());

  h2 = createAndSetAttr('h2',{class:'article-title'});
  setText(h2, generateLoremIpsum(Math.random() * 6 + 5));

  p = createAndSetAttr('p', {class:'article-excerpt'});
  setText(p,generateLoremIpsum(Math.random() * 6 + 22) + '...');

  a.appendChild(time);
  a.appendChild(h2);
  a.appendChild(p);
  li.appendChild(a);

  return li;
}

function createAndSetAttr(eleName, attrMap){
  var ele = document.createElement(eleName) ;
  var props = Object.keys(attrMap);

  for (var i = 0; i < props.length; i++) {
    ele.setAttribute(props[i], attrMap[props[i]]);
  }

  return ele;
}

function setText(node,text){
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function compose(){if(0===arguments.length)throw new Error("compose requires at least one argument");return nu.apply(this,Vn(arguments))}
