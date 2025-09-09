

function List() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 55 },
  { id: 4, name: "pineapple", calories: 65 }];

  fruits.sort((a, b) => a.name.localeCompare(b.name));  // alphabetical sodering

  const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name} &nbsp; <b>{fruit.calories}</b></li>);

  return (<ol>{listItems}</ol>);

}

export default List;