// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Tools.ts" />
class Vector {
    constructor (public x: number, public y: number) { }
    static public Random(maxX: number, maxY: number) {
        return new Vector(Math.floor(Tools.random(maxX)), Math.floor(Tools.random(maxY)));
    }
}
