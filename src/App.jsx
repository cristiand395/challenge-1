import { useEffect, useState } from 'react'

export function App() {
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
    console.log(firstWord)
    fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}${firstWord}?json=true`)
      .then(res => res.json())
      .then(response => setImageId(response._id)
      )
  }, [fact])

  console.log(imageId)
  return (
    <main>
      {
        fact && (<p>{fact}</p>)
      }
      {
        imageId && (
          <img src={`https://cataas.com/cat/${imageId}`} />
        )
      }
    </main>
  )
}
