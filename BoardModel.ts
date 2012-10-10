// Author: Grzegorz Moskal, g.moskal@gmail.com, see Copyright.txt for details 
/// <reference path="Vector.ts" />

enum EDirection { Left, Right, Up, Down, None }

class Direction {
    constructor (public Value: EDirection) { }
    public ToVector(): Vector {
        if (this.Value == EDirection.Left)
            return new Vector(-1, 0);
        if (this.Value == EDirection.Right)
            return new Vector(1, 0);
        if (this.Value == EDirection.Up)
            return new Vector(0, -1);
        if (this.Value == EDirection.Down)
            return new Vector(0, 1);
        return new Vector(0, 0);
    }
}

class BoardModel {
  public Snake : Vector[];
  public Direction: Direction;
  public food: Vector;

  constructor (public width: number, public height: number) {
      this.Snake = new Vector[];
      var mid = new Vector(width / 2, height / 2);
      this.Snake.push(mid);
      this.Direction = new Direction(EDirection.Right);
      this.createFood();
  }
    
  public GetScore() 
  {
      return (this.Snake.length - 1) * 10;
  }

  public update() {
      var first = this.Snake[0];
      var last = this.Snake[this.Snake.length - 1];
      var direction = this.Direction.ToVector();
      this.Snake = this.Snake.reverse();
      this.Snake.push(new Vector(first.x + direction.x, first.y + direction.y));
      this.Snake = this.Snake.reverse();
      if (first.x == this.food.x && first.y == this.food.y)
          this.createFood();
      else
          this.Snake.pop();

      var noSelfColision = true;
      return (noSelfColision && first.x < this.width && first.x >= 0 && first.y < this.height && first.y >= 0);
  }
  
  private createFood() {
      this.food = Vector.Random(this.width, this.height);
      for (var i = 0; i < this.Snake.length; i++) {
          var e = this.Snake[i];
          if (e.x == this.food.x && e.y == this.food.y) {
              this.createFood();
              break;
          }
      }
  }
}