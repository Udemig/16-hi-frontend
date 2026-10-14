import React from "react";

class ClassComponent extends React.Component {
  // constructor: props'a erişmek ve state tanımı için kullanılır
  constructor(props) {
    super(props);

    // state tanımı
    this.state = {
      count: 0,
      list: [],
    };
  }

  // bileşenin ekrana gelme anında çalışan fonksiyon:
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }

  // bileşenin güncellenme anında çalışan fonksiyon
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı");
  }

  // bileşenin ekrandan kaldırılma olayında çalışan fonksiyon
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={() => this.setState({ ...this.state, count: this.state.count + 1 })}>
          Arttır: {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
