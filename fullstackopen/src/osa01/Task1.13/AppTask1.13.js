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

    const [vote, setVote] = useState({
      0: 0,
  
      1: 0, 
  
      2: 0,

      3: 0,
  
      4: 0,
   
      5: 0,
  
      6: 0,
  
    });

    const mostVoted = Object.keys(vote).sort((a, b) => vote[b] - vote[a])[0];

    const [random, setRandom] = useState([])
    const [showResult, setShowresult] = useState(false)
    const [showMost, setShowMost] = useState(false)

    const getRandomString = () => {
      const index = Math.floor(Math.random() * anecdotes.length)
      return index
    }

    const clickHandle = () => {
      let randomString = getRandomString()
      while (randomString === random){
        randomString = getRandomString();
      }
      setRandom(randomString);
      setShowresult(true)
  }

  const getVote = () => {
    setVote({
      ...vote,
      [random]: vote[random] + 1,
    })
    setShowMost(true)
  }

    return(
        <div style={{padding: '20px'}}>
          <h2>Anecdote of the day</h2>
          <p>{anecdotes[random]}</p>
          <p > {showResult?"Has " + vote[random] + " votes" : " "}</p>
          <div>
            <button onClick={getVote} >  Vote</button>
            <button onClick={clickHandle}>Next Anecdotes</button>
            <p>{showMost ? "The most voted anecdote with index " + mostVoted + " and it's <" + anecdotes[mostVoted] + ">." : " "}</p>
          </div>
          <div>
          </div>
        </div>
    )
}

export default App