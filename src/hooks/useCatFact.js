import { useEffect, useState } from 'react'
import { getNewFact } from '../utils/fact'

export function useCatFact() {
  const [fact, setFact] = useState()

  const reloadFact = () => {
    getNewFact()
      .then(newFact => setFact(newFact))
  }
  useEffect(() => {
    getNewFact()
      .then(newFact => setFact(newFact))
  }, [])

  return { fact, reloadFact }
}
