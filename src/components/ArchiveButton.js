import React from 'react';

function ArchiveButton({id, onArchive, toggleText}) {
  return (
      <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
      >
        {toggleText}
      </button>
  );
}

export default ArchiveButton;