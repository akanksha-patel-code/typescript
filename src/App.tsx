import React from 'react';
import './App.css';

function App() {

  // https://ts.chibicode.com/todo/ section 1//

  type Todo = Readonly<{
    id: number
    text: string
    done: boolean
  }>

  const argument: Todo = {
    id: 1, text: 'First todo', done: false
  }

  function toggleTodo(todo: Todo): Todo {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done,
    }
  }

  // https://ts.chibicode.com/todo/ section 2//
  type CompletedTodo = Readonly<{
    id: number
    text: string
    done: true
  }>


  function completeAll(
    todos: readonly Todo[]
  ): CompletedTodo[] {
    return todos.map(todo => ({
      ...todo,
      done: true
    }))
  }

  // Override the done property of Todo

  // type CompletedTodo = Todo & {
  //   readonly done: true
  // }

  // https://ts.chibicode.com/todo/ section 3//

  // Creates a union type of number and string
  type Foo = number | string
  // You can assign either a number or a string
  // variable to Foo. So these will both compile:
  const a: Foo = 1
  const b: Foo = 'hello'
  type Place = 'home' | 'work' | { custom: string }

  // They all compile
  const place1: Place = 'home'
  const place2: Place = 'work'
  const place3: Place = { custom: 'Gym' }
  const place4: Place = { custom: 'Supermarket' }

  type Todo1 = Readonly<{
    id: number
    text: string
    done: boolean
    place: Place
  }>

  type Todo2 = Readonly<{
    id: number
    text: string
    done: boolean
    // place is optional
    place?: Place
  }>

  
  // Little Duckling’s implementation
  function placeToString(place: Place): string {
    if (place === 'home') {
      return ' Home'
    } else if (place === 'work') {
      return ' Work'
    } else {
      // place is guaranteed to be { custom: string }
      return ' ' + place.custom
    }
  }



  return (
    <div className="App">
      {/* section 1 */}
      <button onClick={() => toggleTodo(argument)} > Complete </button>

      {/* section 2 */}
      <button onClick={() => completeAll([
        { id: 1, text: '…', done: false },
        { id: 2, text: '…', done: true }
      ])} > Complete All </button>
    </div>
  );
}

export default App;
