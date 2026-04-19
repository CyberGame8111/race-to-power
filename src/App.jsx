import React, { useState } from "react";
import { createGame } from "./game/gameEngine";

export default function App() {
  const [game, setGame] = useState(() => createGame());

  const current = game.players[game.currentPlayer];
  const front = game.line[0];

  return (
    <div style={{ padding: 20 }}>
      <h1>Race to Power</h1>

      <h2>Current Player: {current.name}</h2>
      <p>Score: {current.score} | Influence: {current.influence}</p>

      <h3>Queue</h3>
      {game.line.map((f, i) => (
        <div key={f.id}>
          {i === 0 ? "👉 " : ""}{f.name} ({f.points})
        </div>
      ))}

      <h3>Actions</h3>
      {current.hand.map(a => (
        <button key={a.id} onClick={() => setGame(g => playAction(g, a.id))}>
          {a.title}
        </button>
      ))}

      <br/><br/>
      <button onClick={() => setGame(g => recruitFront(g))}>
        Recruit Front
      </button>
    </div>
  );
}
