// 设置视口
(function (doc, win) {
  var metaElement = doc.querySelector('meta[name="viewport"]');
  if (!metaElement) {
    // 若无视口，则创建视口，不允许缩放，最大最小缩放比为1
    metaElement = doc.createElement('meta');
    metaElement.setAttribute('name', 'viewport');
    metaElement.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no')
    document.documentElement.firstElementChild.appendChild(metaElement);

    // 设置根fontsize
    var htmlWidth = win.innerWidth || doc.documentElement.cliendWidth || document.body.clientWidth;
    var htmlDom = doc.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    console.log(htmlDom.style.fontSize)
    win.addEventListener('resize', function () {
      htmlWidth = win.innerWidth || doc.documentElement.cliendWidth || document.body.clientWidth;
      htmlDom.style.fontSize = htmlWidth / 10 + 'px';
      console.log('变更后:' + (htmlWidth / 10))
    })
  }
})(document, window)
// function setFontSize(doc, win) {
//   var metaElement = doc.querySelector('meta[name="viewport"]');
//   if (!metaElement) {
//     // 若无视口，则创建视口，不允许缩放，最大最小缩放比为1
//     metaElement = doc.createElement('meta');
//     metaElement.setAttribute('name', 'viewport');
//     metaElement.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no')
//     document.documentElement.firstElementChild.appendChild(metaElement);

//     // 设置根fontsize
//     var htmlWidth = win.innerWidth || doc.documentElement.cliendWidth || document.body.clientWidth;
//     var htmlDom = doc.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
//     console.log(htmlDom.style.fontSize)
//     win.addEventListener('resize', function () {
//       htmlWidth = win.innerWidth || doc.documentElement.cliendWidth || document.body.clientWidth;
//       htmlDom.style.fontSize = htmlWidth / 10 + 'px';
//       console.log('变更后:' + (htmlWidth / 10))
//     })
//   }
// }
// setFontSize(document, window)
// window.onload = function () {
//   setFontSize(document, window)
// }
