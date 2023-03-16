import { useState, useReducer, useEffect } from 'react';
import taskReducer from './reducers/taskReducer.js';

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

  const [task, dispatch] = useReducer(taskReducer, todosApi);
  const [loadTodo, setLoadTodo] = useState(false);
  const [inputValue, setInputValue] = useState('');  

  useEffect(() => {
    setLoadTodo(true);
    const timeoutId = setTimeout(() => {
      setLoadTodo(false);
      setInputValue('');
    }, 450);
    return () => clearInterval(timeoutId);

  }, [task.length]);

  const getTextInput = (value) => {
    setInputValue(value);
  };  

  return (
    
    <Wrapper>
      <Header />
      <div className={'wrapperXS'}>
        <Form 
          getTextInput={getTextInput} 
          dispatch={dispatch} 
          inputValue={inputValue} 
        />
        <Tasktracker task={task} />
        {loadTodo
            ? <Loader />
            : task.map(todo => (
              <Task 
                key={todo.id} 
                dispatch={dispatch} 
                todo={todo} 
              />))
        }
        {(task.length < 1 && !loadTodo) && <Empty />}
      </div>
    </Wrapper>
  );
};

export default Todo;
