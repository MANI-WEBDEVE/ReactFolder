
export const TodoDataGetLocalStorage = () => {
    let dataTask = localStorage.getItem("task-data");
    if (dataTask) {
      return JSON.parse(dataTask);
    }
    return []
}


export const setTodoDataLocalStorage = (task) => {
    localStorage.setItem("task-data", JSON.stringify(task));

}