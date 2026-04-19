export function createGame() {
  return {
    line: [
      { id: 1, name: "The Polling Wizard", points: 5 },
      { id: 2, name: "The Cable News Emperor", points: 3 },
      { id: 3, name: "The Gaffe Machine", points: -2 }
    ],
    players: [
      { name: "Player One", score: 0, influence: 2, hand: [], coalition: [] },
      { name: "Player Two", score: 0, influence: 2, hand: [], coalition: [] }
    ],
    currentPlayer: 0
  };
}

export function recruitFront(state) {
  if (state.line.length === 0) return state;

  const players = [...state.players];
  const player = { ...players[state.currentPlayer] };

  const [front, ...rest] = state.line;

  player.score += front.points;
  player.coalition = [...player.coalition, front];

  players[state.currentPlayer] = player;

  return {
    ...state,
    line: rest,
    players,
    currentPlayer: (state.currentPlayer + 1) % players.length
  };
}

export function playAction(state, actionId) {
  return state;
}
