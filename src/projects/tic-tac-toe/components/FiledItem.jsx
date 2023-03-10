import styled from 'styled-components';

const Button = styled.button`
    height: 250px;
    width: 250px;
    background-color: #fff;
    font-size: 130px;
`

const FiledItem = ({clickFiled, index, el}) => {
  return (
    <Button onClick={() => clickFiled(el, index)}>
        {el}
    </Button>
  )
};

export default FiledItem;
