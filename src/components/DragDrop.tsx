'use client';

import { useState } from 'react';
import { Picture } from './Picture';
import { useDrop } from 'react-dnd';

interface Picture {
  id: number;
  url: string;
}

const pictureList: Picture[] = [
  {
    id: 1,
    url: '/images/hotels/hotel-1.png',
  },
  {
    id: 2,
    url: '/images/hotels/hotel-2.png',
  },
  {
    id: 3,
    url: '/images/hotels/hotel-3.png',
  },
];

export default function DragDrop() {
  const [board, setBoard] = useState<Picture[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: any) => addImageToBoard(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id: number) => {
    const picture: Picture = pictureList.find(
      (picture) => id === picture.id
    ) as Picture;
    setBoard([picture]);
  };

  return (
    <div>
      <div className="flex justify-center gap-5">
        {pictureList.map((item) => (
          <Picture key={item.id} id={item.id} url={item.url} />
        ))}
      </div>
      <div
        ref={drop}
        className="w-[300px] h-[500px] border-2 border-black ml-3 flex flex-col items-center"
      >
        {board.map((item) => (
          <Picture key={item.id} id={item.id} url={item.url} />
        ))}
      </div>
    </div>
  );
}
