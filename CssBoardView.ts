// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Vector.ts" />
/// <reference path="BoardModel.ts" />
/// <reference path="IBoardView.ts" />
/// <reference path="jquery.d.ts" />

class CssBoardView implements IBoardView {
    private model: BoardModel;
    private board: Element;
    private food: Element;
    private score: Element;
    private snake: Element[];
    private elementSize: Vector;

    constructor (model: BoardModel, elementSize: Vector) {
        this.init(model, elementSize);
    }

    public init(model: BoardModel, elementSize: Vector) {
        this.model = model;
        this.elementSize = elementSize;
        this.board = document.getElementById("board");
        this.food = Tools.AddElementTo(this.board, 'div', { 'id': 'food', 'class': 'element' });
        this.score = Tools.AddElementTo(this.board, 'h2', { 'id': 'score', 'style': "'clear:both'" });
        Tools.resizeDiv(this.food, elementSize);
        var size = new Vector(model.width * elementSize.x, model.height * elementSize.y);
        Tools.resizeDiv(this.board, size);
        this.snake = new Element[];
    }

    public draw() {
        this.drawSnake();
        Tools.placeDiv(this.food, this.model.food.x * this.elementSize.x, this.model.food.y * this.elementSize.y);
        this.score.textContent = this.model.GetScore().toString();
    }

    private drawSnake() {
        if (this.snake.length < this.model.Snake.length) {
            var d = Tools.AddElementTo(this.board, 'div',
                { 'id': 'el' + (this.snake.length + 1).toString(), 'class': "element" });
            Tools.resizeDiv(d, this.elementSize);
            this.snake.push(d);
        }
        for (var i = 0; i < this.model.Snake.length; i++) {
            var v = this.model.Snake[i];
            Tools.placeDiv(this.snake[i], v.x * this.elementSize.x, v.y * this.elementSize.y);
        }
    }
}
