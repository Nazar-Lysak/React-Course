import styled from 'styled-components';

import './styles/styles.scss'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Tasktracker from './components/TaskTracker/Tasktracker';
import Task from './components/Task/Task';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #1A1A1A;

    * {
        font-family: 'Inter', sans-serif;
    }
`;

const Todo = () => {
  return (
    <Wrapper>
        <Header />
        <div className={'wrapperXS'}>
            <Form />
            <Tasktracker />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
        
    </Wrapper>
  )
};

export default Todo;
