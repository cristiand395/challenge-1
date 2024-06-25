import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says/'
export function useCatImage({ fact }) {
  const [imageUrl, setImageId] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}${firstWord}?json=true`)
      .then(res => res.json())
      .then(response => setImageId(`https://cataas.com/cat/${response._id}`)
      )
  }, [fact])
  return { imageUrl }
}
