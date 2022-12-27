import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';
import {getInitialData} from '../utils';
import autoBindReact from 'auto-bind/react';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      notes: getInitialData(),
    };
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  toggleArchiveHandler(id) {
    const clickedNote = this.state.notes.filter(note => note.id === id);
    clickedNote[0].archived = clickedNote[0].archived !== true;
    const notes = this.state.notes.map(note => note);
    this.setState({notes});
  }

  onAddNoteHandler({title, body, createdAt, archived}) {
    this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt,
                archived,
              },
            ],
          };
        },
    );
  }

  render() {
    return (
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>

          <h2>Active Note</h2>
          {
            this.state.notes.filter(note => note.archived === false).length ===
            0
                ? <p className="notes-list__empty-message">No Note</p>
                : <NotesList
                    notes={this.state.notes.filter(note => note.archived === false)}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.toggleArchiveHandler}
                    toggleText="Archive"
                />
          }

          <h2>Archive</h2>
          {
            this.state.notes.filter(note => note.archived === true).length === 0
                ? <p className="notes-list__empty-message">No Archive</p>
                : <NotesList
                    notes={this.state.notes.filter(note => note.archived === true)}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.toggleArchiveHandler}
                    toggleText="Active"
                />
          }
        </div>
    );
  }
}

export default NoteBody;