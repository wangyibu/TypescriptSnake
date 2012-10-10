// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="BoardModel.ts" />
/// <reference path="CssBoardView.ts" />
/// <reference path="HtmlCanvasBoardView.ts" />
/// <reference path="Vector.ts" />

class Game {
    private model: BoardModel;
    private views = new IBoardView[];

    constructor () {
        this.model = new BoardModel(40, 20);
        this.views.push(new CssBoardView(this.model, new Vector(15, 15)));
        this.views.push(new HtmlCanvasBoardView(this.model, new Vector(3, 3)));  
        document.onkeydown = e => this.onKeyDown(e, this.model);
        window.setTimeout(() => this.update(), this.ts());
    }

    private ts() {
        var v = (160 - this.model.GetScore() / 3);
        return (v < 80) ? 80 : v;
    }

    private update() {
        if (this.model.update() == false)
            return
        this.views.forEach(v => v.draw());
        window.setTimeout(() => this.update(), this.ts());
    }

    private onKeyDown(e: KeyboardEvent,  model : BoardModel) {
        var d = EDirection.None;
        switch (e.keyCode) {
            case 37: d = EDirection.Left; break;
            case 40: d = EDirection.Down; break;
            case 38: d = EDirection.Up; break;
            case 39: d = EDirection.Right; break;
        }
        model.Direction.Value = d;
    }
}

window.onload = () => new Game(); 