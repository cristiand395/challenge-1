import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says/'
  const [fact, setFact] = useState()
  const [imageId, setImageId] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}${firstWord}?json=true`)
      .then(res => res.json())
      .then(response => setImageId(response._id)
      )
  }, [fact])

  return (
    <main className='app'>
      <section className='content'>
        <h1>Cat Fact Generator</h1>
        {
          fact && (<p>{fact}</p>)
        }
        {
          imageId && (
            <img src={`https://cataas.com/cat/${imageId}`} />
          )
        }

      </section>
    </main>
  )
}
