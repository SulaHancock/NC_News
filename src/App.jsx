import Header from "./Components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticleWithComments from "./Components/ArticleWithComments";
//Sent Q6 PR after NC help was accepting them, so may need to send again tomorrow. 
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleWithComments />} />
      </Routes>
    </>
  );
}

export default App;
git 