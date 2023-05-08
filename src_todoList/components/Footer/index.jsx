import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckedAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    const totalCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              doneCount === totalCount && totalCount !== 0 ? true : false
            }
            onChange={this.handleCheckedAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
