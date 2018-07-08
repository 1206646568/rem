/**
 * 移动端适配方案
 * 目的：在不同尺寸手机上达到理的展示（自适应）或者保证统一效果的等比缩放
 * A、需要明确概念的：视口、物理像素点、css像素、设备像素比、设备独立像素dip与设备像素dp、屏幕像素密度ppi
 * |
 * |--视口（viewport）
 * |  |--概念：设备屏幕上可以显示网页的一部分区域
 * |  |--CSS的 1px 不等于设备的 1px：CSS中的px仅是一个抽象单位。在pc可以不计较，但移动端的屏幕物理像素密度很高（视网膜屏幕）
 * |  |--视口基础：(一个理想的视口)
 * |     |--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
 * |        |--width=device-width：移动端浏览器（如Fennec）在一个通常比屏幕更宽的虚拟”窗口“（视口）中渲染页面，
 * |        |  从而无需将所有页面都压缩进小屏幕里（那样会把很多没有针对移动端进行优化的站点打乱）。用户可以通过平移和缩放来浏览页面的不同区域。
 * |        |  此处是设置视口为当前设备的宽度
 * |        |--initial-scale：属性控制页面最初加载时的缩放等级
 * |        |--maximum-scale、minimum-scale、user-scalable：属性控制允许用户以怎样的方式放大或缩小页面
 * |     |--处理移动端时，若不设置视口宽度，那么移动设备上浏览器默认的宽度值可能为800px，980px，1024px等（csspx）
 * |--物理像素点（设备像素点）：在普通屏幕下一个css像素点对应一个物理像素，但视网膜屏幕下一个css像素可能需要对应多个物理像素,物理像素是指实际像素点
 * |--设备独立像素dip与设备像素dp：dip（设备独立像素）与屏幕密度有关。dip可以用来辅助区分视网膜设备还是非视网膜设备。dp(设备像素)。
 * |--设备像素比（dpr）：设备像素比 ＝ 物理像素 / 设备独立像素
 * |--屏幕像素密度PPI（drp）：屏幕像素密度是指一个设备表面上存在的像素数量
 * |
 * B、需要明确概念的：px单位的适配，设置缩放视口与设置理想视口有什么不同、rem、flex布局
 * |
 * |--px单位的适配：因视网膜屏css中的px无法在移动端显示一致，动态设置视口如果dpr为2，3之外的其他数值，px就没办法适配到。所以使用rem进行适配
 * |--rem：rem定义是根元素的font-size, 以rem为单位，根元素font-size=16px, 则表示1rem=16px。
 * |       根据这个特点，可以根据设备宽度动态设置根元素的font-size，使得以rem为单位的元素在不同终端上以相对一致的视觉效果呈现。
 */


/**
 * 动态设置视口 
 */
// (function (doc, win) {
//   var docEl = win.document.documentElement;
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//   var metaEl = doc.querySelector('meta[name="viewport"]');
//   var dpr = 0;
//   var scale = 0;

//   // 对iOS设备进行dpr的判断，对于Android系列，始终认为其dpr为1
//   if (!dpr && !scale) {
//     var isAndroid = win.navigator.appVersion.match(/android/gi);
//     var isIPhone = win.navigator.appVersion.match(/[iphone|ipad]/gi);
//     var devicePixelRatio = win.devicePixelRatio;

//     if (isIPhone) {
//       dpr = devicePixelRatio;
//     } else {
//       drp = 1;
//     }

//     scale = 1 / dpr;
//   }

//   /**
//     * ================================================
//     *   设置data-dpr和viewport
//     × ================================================
//     */

//   docEl.setAttribute('data-dpr', dpr);
//   // 动态改写meta:viewport标签
//   if (!metaEl) {
//     metaEl = doc.createElement('meta');
//     metaEl.setAttribute('name', 'viewport');
//     metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//     document.documentElement.firstElementChild.appendChild(metaEl);
//   } else {
//     metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//   }

// })(document, window);


/**
 * 动态设置根元素
 * 以下这段代码是用于根据移动端设备的屏幕分辨率计算出合适的根元素的大小
 * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 依次增大；
 * 限制当为设备宽度大于768(iPad)之后，font-size不再继续增大
 * scale 为meta viewport中的缩放大小
 */
// (function (doc, win) {
//   var docEl = win.document.documentElement;
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//   /**
//     * ================================================
//     *   设置根元素font-size
//     * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
//     × ================================================
//     */
//   var refreshRem = function () {
//     var clientWidth = win.innerWidth ||
//       doc.documentElement.clientWidth ||
//       doc.body.clientWidth;

//     console.log(clientWidth)
//     if (!clientWidth) return;
//     var fz;
//     var width = clientWidth;
//     fz = 16 * width / 375;
//     docEl.style.fontSize = fz + 'px';
//   };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, refreshRem, false);
//   doc.addEventListener('DOMContentLoaded', refreshRem, false);
//   refreshRem();

// })(document, window);
