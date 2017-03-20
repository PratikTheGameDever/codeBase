var articles = [];
function article(){
  this.date = new Date();
  this.title = generateLoremIpsum(Math.random() * 6 + 5);
  this.excerpt = generateLoremIpsum(Math.random() * 6 + 22) + '...';
  this.content = generateLoremIpsum(Math.random() * 6 + 220) + '...';
};


function addArticles(){
  var ul = document.getElementById('articles-container'), art;
  for (var i = 0; i < 10; i++) {
    var art = new article();
    articles.push(art);
    ul.appendChild(createArticles(art, false));
  }
}

function callOnClick(article){
  return function(){
    createArticle(article);
  };
}

function createArticle(article){
  var span, time, h2,p, ele = document.getElementById('article-content');

  span = createAndSetAttr('span',{class:'article-preview', title:article.title});

  time = createAndSetAttr('time',{class:'article-date', datetime: article.date});
  setText(time, ['January', 'February', 'March', 'April','June','July','August','September','October','November','December'][article.date.getMonth()] + ' ' + article.date.getDate() + ', ' + article.date.getFullYear());

  h2 = createAndSetAttr('h2',{class:'article-title'});
  setText(h2, article.title);

  p = createAndSetAttr('p', {class:'article-excerpt'});
  setText(p, article.content);

  span.appendChild(time);
  span.appendChild(h2);
  span.appendChild(p);
  ele.innerHTML = '';
  ele.appendChild(span);
  ele.style.display = 'block';
}

function createArticles(article){
  var li, a, time, h2,p;

  li = createAndSetAttr('li',{class:'article'});
  a = createAndSetAttr('a',{class:'article-preview', title:article.title, href:'#hello'+Math.random()});
  a.addEventListener("click", callOnClick(article));

  time = createAndSetAttr('time',{class:'article-date', datetime: article.date});
  setText(time, ['January', 'February', 'March', 'April','June','July','August','September','October','November','December'][article.date.getMonth()] + ' ' + article.date.getDate() + ', ' + article.date.getFullYear());

  h2 = createAndSetAttr('h2',{class:'article-title'});
  setText(h2, article.title);

  p = createAndSetAttr('p', {class:'article-excerpt'});
  setText(p, article.excerpt);

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
