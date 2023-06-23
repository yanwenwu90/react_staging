import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  Search = () => {
    const {
      keyElement: { value: keyWord },
    } = this;
    PubSub.publish("yanwenwu", { isFirst: false, isLoading: true });
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        PubSub.publish("yanwenwu", {
          users: response.data.items,
          isLoading: false,
        });
      },
      (error) => {
        PubSub.publish("yanwenwu", {
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
