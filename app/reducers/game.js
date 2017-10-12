import {
  ADD_HISTORY,
  GO_BACK_HISTORY,
  TOGGLE_GAMER,
  GAME_OVER,
  DELETE_HISTORY,
  NEXT_ROUND
} from '../actions/game';

let initialGame = {
  history: [
    {
      squares: Array(9).fill(null),
      id: 0
    }
  ],
  round: {
    round: 1,
    player1: 0,
    player2: 0
  },
  stepNumber: 0,
  xIsNext: true,
  gameOver: false
};

export default function game(state = initialGame, action) {
  let history = state.history;
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        history: [
          ...history,
          {
            squares: action.array,
            id: action.id
          }
        ]
      };
    case DELETE_HISTORY:
      return {
        ...state,
        history: history.slice(0, action.id + 1)
      };
    case NEXT_ROUND:
      return {
        ...state,
        round: {
          round: action.round,
          player1: action.player1,
          player2: action.player2
        }
      };
    case GO_BACK_HISTORY:
      return {
        ...state,
        stepNumber: action.stepNumber
      };

    case TOGGLE_GAMER:
      return {
        ...state,
        xIsNext: action.xIsNext
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: action.gameOver
      };
    default:
      return state;
  }
}
