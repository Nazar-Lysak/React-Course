import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: 0.3s;
`;

const Image = ({img, alt}) => {
  return <Img src={img} alt={alt} />;
};

export default Image;
