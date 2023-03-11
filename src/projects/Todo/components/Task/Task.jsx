import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    width: 100%;
    height: 72px;
    background: #262626;
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin-bottom: 12px;
`

const Task = () => {
  return (
    <Wrapper>
        Task
    </Wrapper>
  )
};

export default Task;
