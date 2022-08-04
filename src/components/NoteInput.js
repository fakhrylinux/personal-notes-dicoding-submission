import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdAt: +new Date(),
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
        this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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
            />
            <textarea
                className="note-input__body" placeholder="Note..."
                value={this.state.body}
                onChange={this.onContentChangeEventHandler}
            ></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>);
  }
}

export default NoteInput;