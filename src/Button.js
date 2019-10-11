import React from "react";

class Button extends React.Component {
    render() {
        return <button className="button" id={this.props.id} onClick={this.props.onClick}>{this.props.display}</button>
    }
}
export default Button;