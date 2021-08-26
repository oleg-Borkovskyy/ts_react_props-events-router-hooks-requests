import React, { FC } from "react";
import Card, { CardVariant } from "./Card";
import EventExample from "./EventExample";

const DragDropPage: FC = () => {
  return (
    <div>
      <EventExample />
      <Card
        onClick={(number) => console.log(number)}
        width="200px"
        height="200px"
        variant={CardVariant.outline}
      >
        <button>button</button>
      </Card>
    </div>
  );
};

export default DragDropPage;
