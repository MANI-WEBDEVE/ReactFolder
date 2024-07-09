import React from "react";

function AddTodo() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo" />
          </div>
          <div className="col-4">
            {" "}
            <input type="date" />
          </div>
          <div className="col-2">
            {" "}
            <button
              type="button"
              class="btn btn-success"
              style={{ width: "50px", height: "30px", padding: "2px" }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
