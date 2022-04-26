import React from 'react'
import axios from 'axios'
import './App.css';

const baseURL = "http://localhost:8000/"

function Tasks({ tasks }) {
  const list = tasks.map(task => {
    return (
      <li>
        {task.title}
      </li>
    )
  });
  return <ul>{list}</ul>
}

function ShoppingList(props) {
  const [state, setState] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURL + "users/").then((response) => {
      setState(response.data)
    })
  }, [])

  if (!state) return null;

  return (
    <div className="shopping-list">
      <h1>Shopping List for {state[0].email}</h1>
      <Tasks tasks={state[0].items} />
    </div>
  );
}
export default ShoppingList;
