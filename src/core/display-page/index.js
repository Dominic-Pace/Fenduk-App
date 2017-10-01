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

  onAfterSaveCell = (row, cellName, cellValue) => {
    console.log('cell name', cellName)
    console.log('cell value', cellValue)
  }

  options = {
    afterInsertRow: this.onAfterInsertRow,
    afterDeleteRow: this.onAfterDeleteRow,
    afterSaveCell: this.onAfterSaveCell
  };


  render() {
    const {isRequesting, bookList} = this.props;

    return (isRequesting ? (
          <Spinner />
        ) : (
          <FendukTable
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