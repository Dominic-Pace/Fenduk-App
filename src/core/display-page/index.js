import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import FendukTable from './fenduk-table';
import * as actions from './actions';

class DisplayPage extends Component {

  componentWillMount() {
    return this.props.fetchListOfBooks();
  }

  render() {
    const {isRequesting, bookList} = this.props;

    return (isRequesting ? (
          <Spinner />
        ) : (
            <FendukTable
              data={bookList}
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