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

// 有空去研究一下首淘的实现方案 https://github.com/amfe/lib-flexible

// (function flexible(window, document) {
//   var docEl = document.documentElement
//   var dpr = window.devicePixelRatio || 1

//   // adjust body font size
//   function setBodyFontSize() {
//     if (document.body) {
//       document.body.style.fontSize = (12 * dpr) + 'px'
//     } else {
//       document.addEventListener('DOMContentLoaded', setBodyFontSize)
//     }
//     console.log('dpr:', dpr, 'font-size(12*dpr):', (12 * dpr))
//   }
//   setBodyFontSize();

//   // set 1rem = viewWidth / 10
//   function setRemUnit() {
//     var rem = docEl.clientWidth / 10
//     docEl.style.fontSize = rem + 'px'
//     console.log(docEl.clientWidth, rem)
//   }

//   setRemUnit()

//   // reset rem unit on page resize
//   window.addEventListener('resize', setRemUnit)
//   window.addEventListener('pageshow', function (e) {
//     if (e.persisted) {
//       setRemUnit()
//     }
//   })

//   // detect 0.5px supports
//   if (dpr >= 2) {
//     var fakeBody = document.createElement('body')
//     var testElement = document.createElement('div')
//     testElement.style.border = '.5px solid transparent'
//     fakeBody.appendChild(testElement)
//     docEl.appendChild(fakeBody)
//     if (testElement.offsetHeight === 1) {
//       docEl.classList.add('hairlines')
//     }
//     docEl.removeChild(fakeBody)
//   }
// }(window, document))
