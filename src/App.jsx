import { useEffect, useMemo, useState } from "react"

function App() {
  
  const [politics, setPolitics] = useState([])
  const [search, setSearch] = useState("")

  const fetchPoliticians = async() => {
    const res = await fetch('http://localhost:3333/politicians')
    const data = await res.json()
    setPolitics(data)
    
  }
  
  useEffect(() => {
    fetchPoliticians()
  }, [])
  
  const filteredPolitics = useMemo(() => {
    return politics.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.biography.toLowerCase().includes(search.toLowerCase()))
    
  }, [politics, search])

  return (
    <>

    <h1>Politici di oggi:</h1>

    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>

    <div className="card-politici">
    {filteredPolitics.map((el, index) => (
     <div className="card" key={index}>
      <img src={el.image} />
       <div className="card-body">
         <h5 className="card-title">{el.name}</h5>
         <h6 className="card-subtitle">{el.position}</h6>
         <p className="card-text">{el.biography}</p>
       </div>
     </div>
    ))}
    </div>
    </>
  )
}

export default App

// 📌 Milestone 1: Recuperare e visualizzare i dati
// Effettua una chiamata API a
// http://localhost:3333/politicians

// Salva la risposta in uno stato React (useState).

// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)

// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.


// 📌 Milestone 2: Implementare la ricerca ottimizzata
// Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
// Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
// ❌ Non usare useEffect per aggiornare l’array filtrato.

// Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.