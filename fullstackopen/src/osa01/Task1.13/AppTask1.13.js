import { useState } from "react";


const App = () => {

    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    ]

    const points = 
    {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 7,
    }

    const getRandomString = () => {
      const index = Math.floor(Math.random() * anecdotes.length)
      return index
    }

    const [random, setRandom] = useState([])
    const [vote, setVote] = useState(0)
    const [voteClicks, setVoteclicks] = useState([])
    const [showResult, setShowresult] = useState(false)
    const [index, setIndex] = useState(null)

    const clickHandle = () => {
      const randomString = getRandomString()
      setRandom(anecdotes[randomString])
      setIndex(randomString)
  }

  const getVote = () => {
    setVoteclicks(voteClicks.concat(vote))
    setVote(points[index] + 1)
    setShowresult(true)
  }

    return(
        <div style={{padding: '20px'}}>
          <p>{anecdotes[0]}</p>
          <p>{random}</p>
          <p > {showResult?"Has " + points[index] + " votes": " "} {index}</p>
          <div>
            <button onClick={getVote}>Vote</button>
            <button onClick={clickHandle}>Next Anecdotes</button>
          </div>
        </div>
    )
}

export default App