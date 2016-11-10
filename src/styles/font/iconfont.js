;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xingming" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M486.4 585.6c-156.8 0-284.8-128-284.8-284.8 0-156.8 128-284.8 284.8-284.8 156.8 0 284.8 128 284.8 284.8C771.2 454.4 643.2 585.6 486.4 585.6zM486.4 44.8c-140.8 0-252.8 115.2-252.8 252.8 0 140.8 115.2 252.8 252.8 252.8 140.8 0 252.8-115.2 252.8-252.8C739.2 156.8 627.2 44.8 486.4 44.8z"  ></path>'+
      ''+
      '<path d="M867.2 1014.4c-9.6 0-16-6.4-16-16 0-201.6-163.2-364.8-364.8-364.8-201.6 0-364.8 163.2-364.8 364.8 0 9.6-6.4 16-16 16s-16-6.4-16-16c0-220.8 179.2-396.8 396.8-396.8 220.8 0 396.8 179.2 396.8 396.8C883.2 1008 876.8 1014.4 867.2 1014.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
