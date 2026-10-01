import { useEffect, useState } from "react"

function App() {
  
  const [politics, setPolitics] = useState([])

  const fetchPoliticians = async() => {
    const res = await fetch('http://localhost:3333/politicians')
    const data = await res.json()
    setPolitics(data)
    
  }
  
  useEffect(() => {
    fetchPoliticians()
  }, [])
  
  

  return (
    <>
    <div className="card-politici">
    {politics.map((el, index) => (
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