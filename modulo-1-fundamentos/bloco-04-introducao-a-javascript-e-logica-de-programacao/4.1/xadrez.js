let piece = "KinG";

switch (piece.toLocaleLowerCase()) {
  case "king":
    console.log("one square in any direction");
    break;
  case "queen":
    console.log("any number of squares in any direction");
    break;
  case "rook":
    console.log("any number of squares in a straight line");
    break;
  case "bishop":
    console.log("any number of squares diagonally");
    break;
  case "knight":
    console.log("moves on a L shape");
    break;
  case "pawn":
    console.log("one square forward");
    break;
  default:
    console.log("not a chess piece");
    break;
}
