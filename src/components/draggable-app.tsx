"use client";

import { useDrag, useDrop } from "react-dnd";

import { DraggableTypes } from "@/utils/drag";

interface Item {
  id: number;
  originalIndex: number;
}

export function DraggableApp({
  id,
  findCard,
  moveCard,
  name,
}: {
  moveCard: (id: number, to: number) => void;
  id: number;
  name: string;
  findCard: (id: number) => { index: number };
}) {
  const originalIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DraggableTypes.APP,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DraggableTypes.APP,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;
  return (
    <div
      ref={(node) => drag(drop(node))}
      className="border border-primary p-3 rounded cursor-move"
      style={{ opacity }}
    >
      {name}
    </div>
  );
}
