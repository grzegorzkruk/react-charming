import React, { Component } from "react";

export default class Charming extends Component {
  letterCounter = 0;
  render() {
    return React.Children.map(this.props.children, (children, i) =>
      this.renderSplitLetters(children, i)
    );
  }

  splitText(text) {
    return text.split(this.props.splitRegex).map(letter => {
      this.letterCounter++;
      const TagName = this.props.tagName;
      const { classPrefix } = this.props;
      return (
        <TagName
          class={`${classPrefix}${this.letterCounter}`}
          aria-hidden="true"
          style={{
            color: this.getRandomColor()
          }}
        >
          {letter}
        </TagName>
      );
    });
  }

  renderSplitLetters(element, i) {
    if (typeof element === "string") {
      return this.splitText(element);
    } else if (
      typeof element === "object" &&
      typeof element.props.children === "string"
    ) {
      console.log("element ", element);
      const processedElements = this.renderSplitLetters(element.props.children);
      const props = {
        key: Math.floor(Math.random() * 1000 + 1).toString() + i
      };
      return (
        <element.type
          aria-label={element.props.children}
          {...element.props}
          {...props}
        >
          {processedElements}
        </element.type>
      );
    } else {
      return element;
    }
  }

  getRandomColor() {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}

Charming.defaultProps = {
  tagName: "span",
  classPrefix: "char",
  splitRegex: ""
};
