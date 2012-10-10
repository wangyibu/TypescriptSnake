// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Vector.ts" />
/// <reference path="BoardModel.ts" />
/// <reference path="IBoardView.ts" />

class HtmlCanvasBoardView implements IBoardView {
    private model: BoardModel;
    private ctx: CanvasRenderingContext2D;
    private elementSize: Vector;

    constructor (model: BoardModel, elementSize: Vector) {
        this.init(model, elementSize);
    }

    public init(model: BoardModel, elementSize: Vector) {
        this.model = model;
        this.elementSize = elementSize;
        var w = model.width * elementSize.x;
        var h = model.height * elementSize.y;

        var canvas = <HTMLCanvasElement>Tools.AddElementTo(
            document.getElementById("board"), 'canvas', { 'id': 'boardCanvas', 'class': 'shadow' }
        );
        
        this.ctx = canvas.getContext("2d");
        this.ctx.canvas.width = w;
        this.ctx.canvas.height = h;
    }

    public draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawRect(this.model.food, "orange");
        for (var i = 0; i < this.model.Snake.length; i++)
            this.drawRect(this.model.Snake[i]);
    }

    private drawRect(p: Vector, color = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(p.x * this.elementSize.x, p.y * this.elementSize.y, this.elementSize.x, this.elementSize.y);
    }
}
