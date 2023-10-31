'use client';

import DragDrop from '@/components/DragDrop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface TestPageProps {}

export default function TestPage(props: TestPageProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDrop></DragDrop>
    </DndProvider>
  );
}
