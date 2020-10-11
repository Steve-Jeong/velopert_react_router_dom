import React from 'react'

const Home = ({history}) => {
  return (
    <div>
      Home
      <button onClick={()=>{history.push("/posts")}}>Go to Posts</button>
    </div>
  )
}

export default Home
