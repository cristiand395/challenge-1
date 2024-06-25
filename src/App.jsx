import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'
export function App () {
  const { fact, reloadFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main className='app'>
      <section className='content'>
        <h1>Cat Fact Generator</h1>
        <button onClick={() => reloadFact()}>Reload</button>
        {
          fact && (<p>{fact}</p>)
        }
        {
          imageUrl && (
            <img src={imageUrl} alt={`Random image of a cat from the fact: ${fact}`} />
          )
        }
      </section>
    </main>
  )
}
