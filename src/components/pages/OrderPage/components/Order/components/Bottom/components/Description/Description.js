import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, flexCenter, flexCenterBetween } from 'theme/mixins';

const Wrapper = styled.div`
  width: 527px;
  height: 403px;
  padding: 26px 30px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(36, 95, 119, 0.21);
`;

const Title = styled.div`
  color: #4a515c;
  padding-bottom: 4px;
  ${typography(16, 19, 700)};
`;

const SubTitle = styled.div`
  ${typography(14, 19, 500)};
`;

const FlexContainer = styled.div`
  ${flexCenterBetween()};
  align-items: flex-start;

  & + & {
    padding-top: 4px;
  }
`;

const InformationWrapper = styled.div`
  padding-bottom: 35px;
  ${flexCenterBetween()};
`;

const Information = styled.div`
  width: 230px;
  color: #4c4c4c;
  padding-top: 7px;
  ${typography(13, 19)};
`;

const Services = styled.div`
  padding: 8px 0 16px;
`;

const Food = styled.div`
  padding: 9px 0 13px;
`;

const Special = styled.div`
  padding-top: 12px;
`;

const Label = styled.div`
  color: #4c4c4c;
  width: 330px;
  ${typography(13, 16)};
`;

const Value = styled.div`
  color: #979ba0;
  ${typography(13, 15)};
`;

const ImageContainer = styled.div`
  ${flexCenterBetween()};
`;

const Image = styled.div`
  width: 69px;
  height: 46px;
  border-radius: 2px;
  background: #a1b2c3;

  & + & {
    margin-left: 1px;
  }
`;

const ImageOverlay = styled.div`
  width: 69px;
  height: 46px;
  color: #fff;
  ${flexCenter()};
  border-radius: 2px;
  ${typography(12, 15, 500)};
  background-color: rgba(0, 0, 0, 0.5);
`;

class Description extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Title>Описание номера и тарифа</Title>
        <InformationWrapper>
          <Information>
            4 основных места ・ 2 доп. места 1 комната, 42 м ・ ванная комната
          </Information>

          <ImageContainer>
            <Image />
            <Image />
            <Image>
              <ImageOverlay>еще 2</ImageOverlay>
            </Image>
          </ImageContainer>
        </InformationWrapper>

        <SubTitle>Медицинские услуги</SubTitle>
        <Services>
          <FlexContainer>
            <Label>Комплексный массаж тела</Label>
            <Value>3 раза в неделю</Value>
          </FlexContainer>

          <FlexContainer>
            <Label>Лечебные ванны с морской солью</Label>
            <Value>1 раз в день</Value>
          </FlexContainer>

          <FlexContainer>
            <Label>
              Воздействие ультразвуком (фонофорез лекарственных веществ)
            </Label>
            <Value>2 раза в день</Value>
          </FlexContainer>
        </Services>

        <SubTitle>Питание</SubTitle>
        <Food>
          <FlexContainer>
            <Label>Завтрак, обед, ужин</Label>
            <Value>3 раза в день</Value>
          </FlexContainer>
        </Food>

        <SubTitle>Особенности</SubTitle>
        <Special>
          <Label>Возможность подселения</Label>
        </Special>
      </Wrapper>
    );
  }
}

export default styled(Description)``;
