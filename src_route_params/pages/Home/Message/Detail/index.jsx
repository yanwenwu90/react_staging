import React, { Component } from "react";

const DetailData = [
  { id: "01", contant: "你好，祖国" },
  { id: "02", contant: "你好，明天" },
  { id: "03", contant: "你好，社会" },
];

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params;
    const result = DetailData.find((obj) => {
      return obj.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{result.contant}</li>
      </ul>
    );
  }
}
