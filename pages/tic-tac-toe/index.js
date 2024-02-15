import { useEffect, useState } from "react";
import styles from "@/styles/tic-tac-toe.module.css";

// 先建立一個方塊fn，接收value 和 onClick fn
const Square = ({ value, onClick }) => {
  console.log(value);
  return (
    <button onClick={onClick} className={styles["square"]}>
      {value}
    </button>
  );
};

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(false);
  const [status, setStatus] = useState("");

  // 0 1 2
  // 3 4 5
  // 6 7 8

  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // 跑迴圈去比對每個可能連線的位置
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      // 假設連線都一樣是Ｘ，就回傳Ｘ獲勝
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    // 如果沒有勝負就回傳空值
    return null;
  };

  // 當點擊方塊區域
  const handleClick = (currentSquare) => {
    // 展開複製
    let copySquares = [...squares];
    // 如果有連線或 已經有值就不能再填寫
    if (getWinner(copySquares) || copySquares[currentSquare]) return;
    // 如果現在是Ｘ就填上Ｘ，不是就填上Ｏ
    copySquares[currentSquare] = isXTurn ? "X" : "O";
    // 換成Ｏ
    setIsXTurn(!isXTurn);
    // 設定回去
    setSquares(copySquares);
    console.log(squares);
  };

  // 按下重新按鈕，設定成初始值
  const handleRestart = () => {
    setIsXTurn(false);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    // 平手：如果沒有人獲勝 且 每個方框都有值 getWinner(squares)回傳 null
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game.`);
    } else if (getWinner(squares)) {
      // 有勝負代表有值
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`);
    } else {
      // not a draw
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className={styles["tic-tac-toe-container"]}>
      <h1 className={styles["game-title"]}>Tic Tac Toe</h1>
      <div className={styles["row"]}>
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className={styles["row"]}>
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className={styles["row"]}>
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
      <h1 className={styles["status"]}>{status}</h1>
      <button onClick={handleRestart} className={styles["restart-btn"]}>
        Restart
      </button>
    </div>
  );
}
