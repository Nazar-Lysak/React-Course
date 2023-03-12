import { useState } from 'react';

import styled from 'styled-components';
import todoVariables from './Styles/TodoVariables.scss';

import { todosApi } from './apiTodos/todos';

import './styles/styles.scss';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Tasktracker from './components/TaskTracker/Tasktracker';
import Task from './components/Task/Task';
import { Loader } from './UI/Loader/Loader';
import Empty from './components/Empty/Empty';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${todoVariables.gray_600};

  * {
    font-family: ${todoVariables.ont_inter};
  }
`;

const Todo = () => {

    const [todos, setTodos] = useState(todosApi);
    const [loadTodo, setLoadTodo] = useState(false);
    const [inputValue, setInputValue] = useState('')

    const addTask = (id = new Date()) => {
      if(!inputValue.length) return;
      setLoadTodo(true);

      setTimeout(() => {
        setTodos(prev => [...prev, 
          {id: id, done: false, body: inputValue}
        ]);
        setInputValue('');
        setLoadTodo(false); 
      }, 800);            
    };

    const removeTask = (id) => {
      setLoadTodo(true);
      setTimeout(() => {
        setTodos(todos.filter(el => el.id !== id))
        setLoadTodo(false); 
      }, 450);         
    };

    const doneTask = (id) => {
      setTodos(todos.map(el => el.id === id ? { ...el, done: !el.done } : el));        
    };

    const getTextInput = (value) => {
      setInputValue(value);
    };  

  return (
    
    <Wrapper>
      <Header />
      <div className={'wrapperXS'}>
        <Form 
          getTextInput={getTextInput} 
          addTask={addTask} 
          inputValue={inputValue} 
        />
        <Tasktracker todos={todos} />
        {loadTodo && <Loader/>}
        {!loadTodo &&
          todos.map(todo => (
          <Task 
            key={todo.id} 
            removeTask={removeTask} 
            todo={todo} 
            doneTask={doneTask} 
          />))
        }
        {
          (todos.length < 1 && !loadTodo) && <Empty />
        }
      </div>
    </Wrapper>
  );
};

export default Todo;
