import styled from 'styled-components';

import Text from '../../UI/Text/Text';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 25px;
`;

const Tasktracker = () => {
  return (
    <Wrapper>
        <Text text={'All tasks'} />
        <Text text={'Done'}/>
    </Wrapper>
  );
};

export default Tasktracker;
