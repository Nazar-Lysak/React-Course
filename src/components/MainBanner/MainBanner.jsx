import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import Text from '../../UI/Text/Text';

const Banner = styled.div`
  min-height: 682px;
  margin-bottom: 48px;
  background: ${varibles.yellowLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlignContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AlignTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;
const MainBanner = () => {
  return (
    <Banner>
      <AlignContainer className="wrapperM">
        <AlignTextWrapper>
          <Text text={'Yummy Recipes'} type={'h2'} textAlign={'left'} />
          <Text text={'we have a lot of yummy recipes from all aruond the world.'} type={'p'} textAlign={'left'} />
          <Button title={'See Recipes'} />
        </AlignTextWrapper>
        <Image img={process.env.PUBLIC_URL + '/images/banner.png'} alt={'Yummy Recipes'} />
      </AlignContainer>
    </Banner>
  );
};

export default MainBanner;
