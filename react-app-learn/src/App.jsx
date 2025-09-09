import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx"
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <Food />
      <Card></Card>
      <Card />
      <Card /><Card />

      <Student name="Robs " age={25} isStudent={true} />
      <Student name="Patrick " age={42} isStudent={false} />
      <Student name="Sams " age={45} isStudent={false} />
      <Student name="sangs " age={29} isStudent={true} />
      <Student name="Default Props" />
      <List />

      <UserGreetings isLoggedIn={true} username="Robs Code" />

      <Footer></Footer>
    </>


  );

}

export default App
