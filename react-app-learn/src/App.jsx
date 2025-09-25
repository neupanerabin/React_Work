import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx"
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColourPicker from "./ColourPicker.jsx"
import UpdateObjectState from "./Objects_In_State.jsx";
import Arrays from "./Arrays.jsx";
import Array_Objects_Update from "./Array_Objects_Update.jsx";
import ToDoList from "./ToDoList.jsx";
import MyComponents from "./UseEffect.jsx";

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 55 },
  { id: 4, name: "pineapple", calories: 65 },
  { id: 5, name: "grapes", calories: 165 }];

  const vegetable = [{ id: 6, name: "potatoes", calories: 65 },
  { id: 7, name: "celery", calories: 145 },
  { id: 8, name: "carrots", calories: 15 },
  { id: 9, name: "corn", calories: 65 },
  { id: 10, name: "broccoli", calories: 135 }];

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

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {fruits.length > 0 && <List items={vegetable} category="vegetable" />}

      <UserGreetings isLoggedIn={true} username="Robs Code" />
      <Button />
      <MyComponent />
      <Counter />

      <ColourPicker />
      <UpdateObjectState />
      <Arrays />
      <Array_Objects_Update />
      <ToDoList />
      <MyComponents/>

      <Footer></Footer>
    </>


  );

}

export default App
