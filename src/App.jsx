import Header from "./components/Header"
import { IconA, IconB } from "./components/Icon"
import Image from "./components/Image"
import Checkbox from "./components/Checkbox"

import { useState } from 'react'
import VideoPlayer from "./components/Video"

function App() {

  // ทำ Loop map
  const todoList = [
    {
      text: 'coding react',
      isCheckes: false
    },
    {
      text: 'test react',
      isChecked: false
    }
  ]

  //useState
  const [counter, setCounter] = useState(0)

  function buttonClick() {
    setCounter(counter + 1)
  }

  //useEffect
  const [isPlaying, setIsPlaying] = useState(false)

  function triggerPlayer() {
    setIsPlaying(!isPlaying)
  }

  return (
    <>

      {/* Basic Components */}
      <div>
        <Header />
        Earth
        <IconA />
        <IconB />
        <Image imageUrl="https://picsum.photos/536/354" />
      </div>
      <hr />

      {/* if else */}

      <div>
        <Checkbox
          text="doing document react"
          isChecked={true}
        />
        <Checkbox
          text="test react"
          isCheck={false}
        />
      </div>
      <hr />

      {/* Loop */}

      <div>
        {
          todoList.map((todo, index) =>
            <Checkbox
              key={index}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          )
        }
      </div>
      <hr/>

      {/* useState */}
      <div>
        Now counter is {counter}
        <button onClick={buttonClick}>Add Counter</button>
      </div>
      <hr />

      {/* useEffect */}
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
      <button onClick={triggerPlayer}>{isPlaying ? 'Pause' : 'Play'}</button>

    </>
  )
}

export default App
