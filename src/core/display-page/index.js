import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import FendukTable from './fenduk-table';
import * as actions from './actions';

class DisplayPage extends Component {
  componentDidMount() {
    this.props.fetchListOfBooks();
  }

  onAfterInsertRow = (row) => {
    let newBook = {};

    for (const prop in row) {
      newBook[prop] = row[prop]
    }
    this.props.createNewBook(newBook);
  }

  onAfterDeleteRow = (row) => {
    this.props.removeBook(row);
  }

  onAfterSaveCell = (row) => {
    let updatedBook = {};

    for (const prop in row) {
      updatedBook[prop] = row[prop]
    }

    this.props.updateBook(updatedBook, updatedBook['_id']);
  }

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