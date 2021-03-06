// retorne o tipo de movimento de uma peça de xadrez

let chessPiece = 'RoOk';
let lowerChess = chessPiece.toLocaleLowerCase();

switch (lowerChess) {

    case 'king':
        console.log('Moves one square in any direction.');
        break;

    case 'rook':
        console.log('Moves any number of squares along a rank or file, but cannot leap over other pieces.');
        break;

    case 'bishop':
        console.log('Moves any number of squares diagonally, but cannot leap over other pieces.');
        break;

    case 'queen':
        console.log('Combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.');
        break;

    case 'knight':
        console.log('Moves to any of the closest squares that are not on the same rank, file, or diagonal. The knight is the only piece that can leap over other pieces.');
        break;

    case 'pawn':
        console.log('Moves forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file. can capture an opponents piece on a square diagonally in front of it by moving to that square.');
        break;

    default:
        console.log('error');

}
    
    

    