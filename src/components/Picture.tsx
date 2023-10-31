import { useDrag } from 'react-dnd';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PictureProps {
  id: number;
  url: string;
}

export function Picture({ id, url }: PictureProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Image
      ref={drag}
      src={url}
      alt="picture"
      key={id}
      width={150}
      height={150}
      className={cn(isDragging && 'border-[5px] border-pink-400')}
    />
  );
}
