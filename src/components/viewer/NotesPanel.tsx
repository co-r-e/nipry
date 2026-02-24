"use client";

import { useEffect, useRef } from "react";
import { PanelRightClose } from "lucide-react";

interface NotesPanelProps {
  notes: string | undefined;
  isOpen: boolean;
  width: number;
  onToggle: () => void;
  resizeHandleProps: { onMouseDown: (e: React.MouseEvent) => void };
}

export function NotesPanel({
  notes,
  isOpen,
  width,
  onToggle,
  resizeHandleProps,
}: NotesPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when notes change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [notes]);

  if (!isOpen) return null;

  return (
    <aside className="relative flex h-full shrink-0" style={{ width }}>
      {/* Resize handle */}
      <div
        {...resizeHandleProps}
        className="absolute left-0 top-0 z-10 h-full w-1 cursor-col-resize transition-colors hover:bg-black"
      />

      {/* Panel body */}
      <div className="flex h-full w-full flex-col border-l border-gray-200 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <span className="text-sm font-semibold text-gray-700">Notes</span>
          <button
            onClick={onToggle}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close notes panel"
          >
            <PanelRightClose size={18} />
          </button>
        </div>

        {/* Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-4">
          {notes ? (
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-600">
              {notes}
            </pre>
          ) : (
            <p className="text-sm text-gray-400">No notes</p>
          )}
        </div>
      </div>
    </aside>
  );
}
