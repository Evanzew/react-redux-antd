export const ADD_HISTORY = 'ADD_HISTORY';
export const GO_BACK_HISTORY = 'GO_BACK_HISTORY';
export const TOGGLE_GAMER = 'TOGGLE_GAMER';
export const GAME_OVER = 'GAME_OVER';
export const DELETE_HISTORY = 'DELETE_HISTORY';
export const NEXT_ROUND = 'NEXT_ROUND';
let nextHistoryId = 1;

export const addHistory = array => ({
  type: ADD_HISTORY,
  id: nextHistoryId++,
  array
});

export const deleteHistory = id => ({
  type: DELETE_HISTORY,
  id
});

export const goBackHistory = stepNumber => ({
  type: GO_BACK_HISTORY,
  stepNumber
});

export const toggleGamer = xIsNext => ({
  type: TOGGLE_GAMER,
  xIsNext
});

export const gameIsOver = gameOver => ({
  type: GAME_OVER,
  gameOver
});

export const nextRound = (round, player1, player2) => ({
  type: NEXT_ROUND,
  round,
  player1,
  player2
});
