import React from 'react';
import autoBindReact from 'auto-bind/react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      title: '',
      body: '',
      createdAt: +new Date(),
      archived: false,
    };
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
        <div className="note-input">
          <h2>Create Note</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <input
                type="text"
                className="note-input__title"
                placeholder="Title"
                value={this.state.name}
                onChange={this.onTitleChangeEventHandler}
                required
            />
            <textarea
                className="note-input__body" placeholder="Note..."
                value={this.state.body}
                onChange={this.onContentChangeEventHandler}
                required
            ></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>);
  }
}

export default NoteInput;