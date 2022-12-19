import styled from 'styled-components';

export const Container = styled.table`
  width: 450px;
  margin: 30px;

  background-color: #eee;
  border: solid 1px #aaa;
`;
export const Thead = styled.thead`
  background-color: turquoise;
  tr {
    th {
      width: 200px;
      padding: 5px;
    }
  }
`;
export const Tbody = styled.tbody`
  background-color: #fff;
`;
export const Th = styled.th`
  width: 200px;
  padding: 5px;
`;
