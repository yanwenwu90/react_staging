import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };

  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(msgObj.id, msgObj.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(msgObj.id, msgObj.title);
                  }}
                >
                  replace查看
                </button>
                {/* <Link
                  // to={`/home/message/detail/?id=${msgObj.id}&tite=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
