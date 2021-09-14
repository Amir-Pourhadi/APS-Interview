import { inRange } from "lodash";
import { useCallback, useState } from "react";
import Draggable from "./Draggable";
import { Heading, Main, Rect } from "./view";

const SortList = ({ user: { name, animals } }) => {
  const items = animals;
  const [state, setState] = useState({
    order: items,
    dragOrder: items,
    draggedIndex: null,
  });

  const handleDrag = useCallback(
    ({ translation, id }) => {
      const delta = Math.round(translation.y / 80);
      const index = state.order.indexOf(id);
      const dragOrder = state.order.filter((index) => index !== id);

      if (!inRange(index + delta, 0, items.length)) return;
      dragOrder.splice(index + delta, 0, id);
      setState((state) => ({ ...state, draggedIndex: id, dragOrder }));
    },
    [state.order, items.length]
  );

  const handleDragEnd = useCallback(() => {
    setState((state) => ({ ...state, order: state.dragOrder, draggedIndex: null }));
  }, []);

  return (
    <Main>
      <div className="position-absolute w-50 px-5">
        <Heading>
          You are Fascinating!
          <br /> Only two more steps ...
        </Heading>
        <p className="fs-3">1) Please sort these by length of them.</p>
        <p className="fs-3">2) Please change the place of first and last box.</p>
      </div>
      {items.map((index) => {
        const isDragging = state.draggedIndex === index;
        const top = state.dragOrder.indexOf(index) * 90;
        const draggedTop = state.order.indexOf(index) * 90;

        return (
          <Draggable key={index} id={index} onDrag={handleDrag} onDragEnd={handleDragEnd}>
            <Rect isDragging={isDragging} top={isDragging ? draggedTop : top}>
              {index}
            </Rect>
          </Draggable>
        );
      })}
    </Main>
  );
};

export default SortList;
