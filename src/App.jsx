import { useState } from "react"

const TURN = {
  X: `X`,
  O: `O`
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const ClassName = `square ${isSelected ? `is-selected` : ``}`
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={ClassName} key={index}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )  
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if(board[index])return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
  }

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
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>
    </main>
  )
}

export default App
