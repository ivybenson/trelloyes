import React from "react";
import Card from "./Card";
import "./List.css";
import store from "./STORE.js";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        ))}
        <button
          type="button"
          className="list-add-button"
          onClick={() => props.onClickDelete(props.id)}
        >
          + Add random card
        </button>
      </div>
    </section>
  );
}

List.defaultProps = {
  onClickAdd: () => {},
};
