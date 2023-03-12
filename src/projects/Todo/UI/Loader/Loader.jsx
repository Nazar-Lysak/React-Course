import { ProgressBar } from  'react-loader-spinner';
import styled from 'styled-components';

import todoVariables from '../../Styles/TodoVariables.scss';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

export const Loader = () => {
  return (
    <Wrapper>
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = {todoVariables.purple}
            barColor = {todoVariables.blue}
        />
    </Wrapper>
  )  
};
