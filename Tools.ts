// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Vector.ts" />
/// <reference path="jquery.d.ts" />

class Tools {
    static public random(range: number) {
        return (Math.random() * 10000 % range);
    }
    static public toPx(x:number)
  {
    return x.toString() + "px";
  }

  static public fromPx(x: string)
  {
    return  new Number(x.replace("px", ""));
  }

 
  static public AddElementTo(mother: Element, tagName: string, attributes = { })
  {
      var el = document.createElement(tagName);
      for (var k in attributes)
          el.setAttribute(k, attributes[k]);
      mother.appendChild(el);
      return el;
  }

  static public placeDiv(e:Element, x:number,y:number)
  {
      $(e).css("left", toPx(x));
      $(e).css("top", toPx(y));
  }
  
  static public resizeDiv(e:Element, v:Vector)
  {
      $(e).css("width", toPx(v.x));
      $(e).css("height", toPx(v.y));
  }   
}