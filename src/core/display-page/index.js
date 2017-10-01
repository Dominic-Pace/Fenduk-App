import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import FendukTable from './fenduk-table';
import * as actions from './actions';

class DisplayPage extends Component {
  componentDidMount() {
    this.props.fetchListOfBooks();
  }

  /**
   * Method used to save a book to the database after inserting a row into the table
   * @param row - row added from modal.
   */
  onAfterInsertRow = (row) => {
    let newBook = {};

    for (const prop in row) {
      newBook[prop] = row[prop]
    }
    this.props.createNewBook(newBook);
  }

  /**
   * Method used to remove a book from the database after clicking the Delete Button
   * @param row - row to remove.
   */
  onAfterDeleteRow = (row) => {
    this.props.removeBook(row);
  }

  /**
   * Method used to update a book in the database after modifying a field in the UI.
   * @param row - row/book to update.
   */
  onAfterSaveCell = (row) => {
    let updatedBook = {};

    for (const prop in row) {
      updatedBook[prop] = row[prop]
    }

    this.props.updateBook(updatedBook, updatedBook['_id']);
  }

  /**
   * Table options.
   * @type {{afterInsertRow: ((p1:*)), afterDeleteRow: ((p1?:*))}}
   */
  options = {
    afterInsertRow: this.onAfterInsertRow,
    afterDeleteRow: this.onAfterDeleteRow,
  };

  cellEditProp = {
    mode: 'click',
    blurToSave: true,
    afterSaveCell: this.onAfterSaveCell
  };

  render() {
    const {isRequesting, bookList} = this.props;

    return (isRequesting ? (
          <Spinner />
        ) : (
          <FendukTable
            cellEditProp={this.cellEditProp}
            data={bookList}
            options={this.options}
          />
        )
    )
  }
}

const mapStateToProps = ({ display }) => {
  const {
    errorMessage,
    isRequesting,
    bookList
  } = display
  return {
    errorMessage,
    isRequesting,
    bookList
  }
};
export default connect(mapStateToProps, { ...actions })(DisplayPage)