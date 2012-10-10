// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Vector.ts" />
/// <reference path="BoardModel.ts" />

interface IBoardView {
    draw(): void;
    init(xmodel: BoardModel, elementSize: Vector): void;
}