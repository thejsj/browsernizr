var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');
require('./../../lib/test/canvas');

/*!
{
  "name": "canvas blending support",
  "property": ["canvasblending"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
/* DOC
Detects if Photoshop style blending modes are available in canvas
*/


  Modernizr.addTest('canvasblending', function() {
    if (Modernizr.canvas === false) return false;
    var ctx = createElement('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'screen';
    return ctx.globalCompositeOperation === 'screen';
  });


