import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  Search = () => {
    const {
      keyElement: { value: keyWord },
    } = this;

    this.props.updateAppState({ isFirst: false, isLoading: true });
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
        });
      },
      (error) => {
        this.props.updateAppState({
          err: error.message,
          isLoading: false,
        });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => {
              this.keyElement = c;
            }}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;
          <button onClick={this.Search}>搜索</button>
        </div>
      </section>
    );
  }
}
