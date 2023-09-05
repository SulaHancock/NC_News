import Header from './Components/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import FullArticleCard from './Components/FullArticleCard'


function App() {
    return (
        <>
<Header /> 

<Routes>
<Route path="/" element={<Home />}/> 
<Route path="/article/:article_id" element={<FullArticleCard />}/>
</Routes>
</>
    )
}

export default App

