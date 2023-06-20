import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input type="text" placeholder="输入关键词点击搜索" />
          &nbsp;
          <button onClick={this.Search}>搜素</button>
        </div>
      </section>
    );
  }
}
