import React from "react";
import './App.css'
import {
  AddTaskForm,
  Header,
} from './components'
const App = () => {
  return (
    <div>
      <Header />
      <AddTaskForm />
      <div>
        <ul>
          <li>
            <input type="checkbox" />
            <h2>Build This App</h2>
            <button>x</button>
          </li>
        </ul>
      </div>
      <div>
        <div>
          2 items
        </div>
        <div>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        Developed By MehdiLotfi
      </footer>
    </div>
  )
}

export default App