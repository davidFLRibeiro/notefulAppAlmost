import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddNoteStyle.css';

class Addnote extends Component {
  render() {
    return (
      <div>
        <form
          className='AddNote'
          noValidate
          onSubmit={this.props.handleAddNote}
        >
          <input
            required
            type='text'
            name='text'
            id='addnote'
            value={this.props.text}
            onChange={this.props.onChangeNote}
          ></input>
          <select
            value={this.props.selectedFolder}
            onChange={this.props.noteFolderIdChange}
          >
            {this.props.folders.map(folder => {
              return (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              );
            })}
          </select>
          <textarea
            required
            value={this.props.textArea}
            onChange={this.props.onChangeNoteTxtArea}
          />
          <button type='submit'>add Note</button>
        </form>
        <div className='res-block'>
          {this.props.isNoteValid && (
            <p>ERROR: note name and content can not be empty</p>
          )}
        </div>
      </div>
    );
  }
}

Addnote.propTypes = {
  text: PropTypes.string,
  onChangeNote: PropTypes.func,
  handleAddFolder: PropTypes.func,
  selectedFolder: PropTypes.string,
  noteFolderIdChange: PropTypes.func,
  textArea: PropTypes.string,
  onChangeNoteTxtArea: PropTypes.func,
  handleAddNote: PropTypes.func
};

export default Addnote;
