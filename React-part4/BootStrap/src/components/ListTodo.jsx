import React from "react";
import '../App.css'
function ListTodo() {
  return (
    <div className="list-todo">
      <div className="row">
        <div className="col-6 task">Meat Buy</div>
        <div className="col-4">23/23/3434</div>
        <div className="col-2">
          {" "}
          <button
            type="button"
            class="btn btn-outline-danger"
            style={{ width: "50px", height: "30px", padding: "2px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
