import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
;

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Cortar cebollita', completed: true },
  { text: 'hacer almuerzo', completed: true },
  { text: 'Tomar el curso de intro a javascript', completed: false },   
];

function App() {
  const [todos, setTodos] = React.useState (defaultTodos);
  const [searchValue, setSearchValue] = React.
  useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
    );

    const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    }


  return (
    <React.Fragment>  

     <TodoCounter completed={completedTodos} total={totalTodos} />
     <TodoSearch
       searchValue={searchValue}
       setSearchValue={setSearchValue}
     />
      <TodoList>
        {searchedTodos.map(todo => 
        (<TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo(todo.text)}
          />
        ))}
      </TodoList>

      
<CreateTodoButton />


    </React.Fragment>
  );
}



export default App;
