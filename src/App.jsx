import { useState } from "react";
import {
  Item,
  Container,
  ToDoList,
  Input,
  List,
  ButtonRemove,
  CentralHeader,
  MarginButtons
} from "./styles.js";
import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import { red, blue, green, amber } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function addTask() {
    setTasks([...tasks, { taskName: inputValue, selectedOption: "" }]);
    setInputValue("");
  }

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleOptionChange(option, index) {
    const newTasks = [...tasks];
    newTasks[index].selectedOption = option;
    setTasks(newTasks);
    setSelectedOption(option);
  }

  return (
    <Container>
      <ToDoList>
        <Typography mb={4} variant="overline" fontSize={30} align="center">To Do List !</Typography><hr />
        <CentralHeader>
          <Input
            size={40}
            placeholder="Enter your task here..."
            onChange={inputChange}
            value={inputValue}
          />
          <Button
            color="secondary"
            variant="contained"
            onClick={addTask}
          >
            Add Task
          </Button>
        </CentralHeader>

        <List>
          {tasks.map((item, index) => (
            <Item key={index}>
              <div>
                {item.taskName}{" "}
              </div>
              <MarginButtons>
              <ButtonGroup sx={{ ml: 1 }}>
                <Button
                  sx={{ backgroundColor: item.selectedOption === "notStarted" ? red[800] : undefined, color: item.selectedOption === "notStarted" ? amber[50] : red[800] }}
                  variant="none"
                  onClick={() => handleOptionChange("notStarted", index)}
                >
                  Not Started
                </Button>
                <Button
                  sx={{ backgroundColor: item.selectedOption === "imDoing" ? blue[800] : undefined, color: item.selectedOption === "imDoing" ? amber[50] : blue[800] }}
                  variant="none"
                  onClick={() => handleOptionChange("imDoing", index)}
                >
                  I'm Doing
                </Button>
                <Button
                  sx={{ backgroundColor: item.selectedOption === "done" ? green[800] : undefined, color: item.selectedOption === "done" ? amber[50] : green[800] }}
                  variant="none"
                  onClick={() => handleOptionChange("done", index)}
                >
                  It's Done!
                </Button>
              </ButtonGroup>
              <ButtonRemove onClick={() => removeTask(index)}></ButtonRemove>
              </MarginButtons>
            </Item>
          ))}
        </List>
      </ToDoList>
    </Container>
  );
}

export default App;
