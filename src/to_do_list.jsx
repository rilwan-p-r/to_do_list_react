import { useState, useEffect, useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
function To_do_list() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTodo, setEditTudo] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  function handleTask(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (
      newTask.trim() !== "" &&
      newTask.length >= 2 &&
      !tasks.includes(newTask)
    ) {
      setTask([...tasks, { todo: newTask, id: Date.now(), status: false }]);
      setNewTask("");
    }
    if (editTodo) {
      const editTodos = tasks.find((task) => task.id === editTodo);
      const updateTodo = tasks.map((task) =>
        task.id === editTodos.id
          ? (task = { id: task.id, todo: newTask })
          : (task = { id: task.id, todo: task.todo })
      );
      setTask(updateTodo);
      setEditTudo(0);
      setNewTask('')
    }
  }
  function removeTask(index) {
    setTask(tasks.filter((task, i) => i !== index));
  }
  function taskUp(index) {
    if (index > 0) {
      const updateTask = [...tasks];

      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  }
  function taskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];

      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  }
  const handleCompleteTask = (id) => {
    const updateComplete = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTask(updateComplete);
  };
  const handleEdit = (id) => {
    const editTodo = tasks.find((task) => task.id === id);
    setNewTask(editTodo.todo);
    setEditTudo(editTodo.id);
  };

  return (
    <div className="to_do_list">
      <h1>TO Do List</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleTask}
      />
      <button className="addTask" title="Adding" onClick={addTask}>
        {editTodo ? "Edit" : "Add"}
      </button>
<div className="box">
      <ol className="lists">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text" id={task.status ? "completedTask" : ""}>
              {task.todo}
            </span>
            <button className="editBtn" title="Edit Button" onClick={() => handleEdit(task.id)}>
              <CiEdit />
            </button>
            <button className="deleteBtn" title="Delete" onClick={() => removeTask(index)}>
            <MdDeleteForever />
            </button>
            <button className="moveBtn" title="UP Button" onClick={() => taskDown(index)}>
              ⬇
            </button>
            <button className="moveBtn" title="DOWN Button" onClick={() => taskUp(index)}>
              ⬆
            </button>
            <button
              className="completedBtn" title="Marking"
              onClick={() => handleCompleteTask(task.id)}
            >
              <IoCheckmarkDone />{" "}
            </button>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}
export default To_do_list;
