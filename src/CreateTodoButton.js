import './CreateTodoButton.css';

function CreateTodoButton () {
  return(
    
     <button className="CreateTodoButton"
     onClick={
      (event) => {
      console.log('Button clicked!')
      console.log(event)
        }
      }>
       +
      </button>
    
  )
}

export { CreateTodoButton
};