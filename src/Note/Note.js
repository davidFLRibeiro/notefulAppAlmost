import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ApiContext from '../ApiContext';
import config from '../config';
import './Note.css';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  //static defaultProps = {
  // onDeleteNote: () => {}
  //};

  static contextType = ApiContext;

  handleClickDelete(e) {
    e.preventDefault();
    const noteId = this.props.id;
    console.log(noteId);
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        console.log('made it to error');
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        console.log('made it to 2 error');
        this.context.deleteNote(noteId);
      })

      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const { name, id, modified } = this.props;
    console.log(name, id, modified);
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>{name}</Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>Modified </div>
        </div>
      </div>
    );
  }
}
