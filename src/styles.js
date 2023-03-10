import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(6,1,92);
    background: linear-gradient(90deg, rgba(6,1,92,1) 0%, rgba(9,9,121,1) 35%, rgba(2,173,208,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const ToDoList = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
`;

export const CentralHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const List = styled.ul`
    padding: 12px;
    margin-top: 30px;
`


export const Item = styled.li`
    color: #000000;
    font-size: 15px;
    font-weight: 400;
    background: #e4e4e4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    list-style-type: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    padding-left: 10px;
    margin-right: 10px;
`;

export const ButtonAddTask = styled.button`
    background: #8052ec;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    margin-left: 20px;
    &:hover {
        opacity: 0.8;
    }  
    &:active {
        opacity: 0.6;
    }
`

export const ButtonRemove = styled(ButtonAddTask)`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff5b5b;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 15px;
    height: 4px;
    background-color: white;
  }

  &::before {
    transform: translateX(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) rotate(-45deg);
  }
`;

export const MarginButtons = styled.line`
  margin-left: 10px;
`