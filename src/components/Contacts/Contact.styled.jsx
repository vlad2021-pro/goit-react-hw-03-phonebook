import styled from "@emotion/styled";

const color = "blue";

export const ContactList = styled.div`
  padding: 7px;
  color: black;
  border-radius: 5px;
  margin: auto;
  width: 200px;
  list-style-type: none;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ContactData = styled.p`
  display: inline-block;
  margin-bottom: 10px;
  vertical-align: top;
  text-align: center;
  line-height: normal;

  :first-of-type {
    margin-right: 10px;
  }
`;

export const ContactButton = styled.button`
  margin-left: 10px;
  margin-top: 8px;
  width: 100px;
  
  text-align: center;
  background-color: white;
  color: black;
  font-size: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #a9a9a9;
  &:hover {
    color: white;
    background-color: ${color};
    cursor: pointer;
`;
