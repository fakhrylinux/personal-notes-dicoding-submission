import React from 'react';
import DeleteButton from './DeleteButton';
import {showFormattedDate} from '../utils';
import ArchiveButton from './ArchiveButton';

function NoteItem(
    {title, createdAt, body, id, onDelete, onArchive, toggleText}) {

  return (
      <div className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <DeleteButton id={id} onDelete={onDelete}/>
          <ArchiveButton
              id={id}
              onArchive={onArchive}
              toggleText={toggleText}
          />
        </div>
      </div>
  );
}

export default NoteItem;