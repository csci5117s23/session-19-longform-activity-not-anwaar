import logo from './logo.svg';
import './App.css';
import FlashCard from "./FlashCard"
import FlashCardBuilder from "./FlashCardBuilder"
import FlashCardList from "./FlashCardList"

function App() {
  // const QUESTIONS = [{front: "question1", back:"answer1"},
  //                   {front: "question2", back:"answer2"},
  //                   {front: "question3", back:"answer3"},]
  const [questions, setQuestions] = useState([])
  // const [newQuestion, setNewQuestion] = useState()
  // function onAdd() {
  //   setQuestions()
  // }
  return (
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header> */}

      Flashcards:
      <FlashCard frontName={"Front1"} backName={"Back1"} />
      <FlashCard frontName={"Front2"} backName={"Back2"} />

      FlashCardList:
      <FlashCardList flash_card_list={QUESTIONS} />

      FlashCardBuilder:
      <FlashCardBuilder />



    </div>
  );
}

export default App;
