import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-clip: padding-box;
  margin-bottom: 60px;
  position: relative;
  height: 400px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  -webkit-border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  border-radius: 2px 2px 0 0;
  background-clip: padding-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: inherit;
`;

const CardImage = styled.div`
  height: 200px;
`;

const CardContent = styled.div`
  padding: 20px;
  -webkit-border-radius: 0 0 2px 2px;
  -moz-border-radius: 0 0 2px 2px;
  border-radius: 0 0 2px 2px;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 30px;
  overflow: hidden;
  height: 100%;
`;

const Title = styled.span`
  color: #008073;
  font-size: 24px;
  font-weight: 300;
  line-height: 2.5rem;
  cursor: pointer;
`;

const Description = styled.p`
  padding: 5px 0 0;
  margin: 0;
  color: inherit;
`;

const Container = styled.div`
  width: 90%;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1280px;
`;

const CardRevel = styled.div`
  padding: 20px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  top: 100%;
  height: 100%;
  z-index: 1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transform: ${(props) => `translateY(${props.transform ? '-100%' : '0px'})`};
`;

const CardAction = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 20px;
`;

const StyledLink = styled.a`
  overflow: hidden;
  user-select: none;
  will-change: opacity, transform;
  background-color: #795548;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 15px;
  -moz-border-radius: 2px;
  text-transform: uppercase;
  border: none;
  outline: 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  display: inline-block;
  color: #fff;
  position: relative;
  z-index: 1;
  line-height: 37px;
  padding: 0;
  border-radius: 50%;
  background-clip: padding-box;
  transition: 0.3s;
  cursor: pointer;
  width: 55.5px;
  height: 55.5px;
  font-size: 1.6rem;
  line-height: 55.5px;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const CardTitle = styled.span`
  font-size: 24px;
`;

export {
  CardContent,
  Card,
  Container,
  CardAction,
  CardImage,
  CardRevel,
  Description,
  Title,
  Image,
  StyledLink,
  CardTitle,
};
