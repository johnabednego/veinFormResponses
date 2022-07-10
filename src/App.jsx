import DBView from "./pages/Data/dbView";
import { dummyData } from "./pages/Data/mockData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios('http://dry-savannah-94364.herokuapp.com/answers').then(response=>{
      setData(response.data)
    }).catch(error=>console.log(error))
  }, [])
 

  const columns = [
    {question: "id", ID: "id"},
    {question: "Date", ID: "date"},
    {question: "What do you do?", ID: "q1"},
    {question: "Where do you mostly hold your business activities?", ID: "q2"},
    {question: "Which gadget do you use the most for your business activities?", ID: "q3"},
    {question: "How do you receive payments from your clients?", ID: "q4"},
    {question: "With which medium do you mostly interact with your clients?", ID: "q5"},
    {question: "Which issues do you face with your business activities?", ID: "q6"},
    {question: "How well are you able to interact with a website?", ID: "q7"},
    {question: "How well are you able to interact with a mobile app?", ID: "q8"},
    {question: "Have you used a website or mobile app to help your business activities?", ID: "q9"},
    {question: "Will you be willing to use a website or mobile app to help your business activities (for free)?", ID: "q10"},
  ]

   

 
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DBView columns={columns} data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
