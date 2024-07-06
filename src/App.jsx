import { useState } from "react"

const TURN = {
  X: `X`,
  O: `O`
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const ClassName = `square ${isSelected ? `is-selected` : ``}`
  return (
    <div className={ClassName} key={index}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))  
  const [turn, setTurn] = useState(TURN.X)

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn == TURN.O}>{TURN.O}</Square>
      </section>
    </main>
  )
}

export default App
