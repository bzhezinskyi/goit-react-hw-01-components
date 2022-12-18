import styled from 'styled-components';

export const Container = styled.section`
  width: 450px;
  margin: 30px;
  padding-top: 10px;

  background-color: #eee;
  border-radius: 5px;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  & :first-child {
    border-bottom-left-radius: 5px;
  }
  & :last-child {
    border-bottom-right-radius: 5px;
  }
`;
export const Item = styled.li`
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
`;
export const Label = styled.span`
  color: #fff;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
