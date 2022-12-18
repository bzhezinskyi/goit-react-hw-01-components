import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  margin: 30px;
  padding-top: 30px;

  background-color: #eee;
  border-radius: 5px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: gainsboro;
`;
export const Username = styled.p`
  margin: 8px;
  font-weight: bold;
`;
export const Teg = styled.p`
  margin: 8px;
  color: grey;
`;
export const Location = styled.p`
  margin: 8px;
  color: grey;
`;
export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    width: 90px;
    height: 90px;

    padding: 8px;
    border: solid 0.1px grey;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: rgba(127, 255, 212, 0.5);
  }
  & :first-child {
    border-bottom-left-radius: 5px;
  }
  & :last-child {
    border-bottom-right-radius: 5px;
  }
`;
export const Label = styled.span`
  color: grey;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
