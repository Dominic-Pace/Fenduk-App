import React  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import '../styles.css';

const selectRowProp = {
  mode: 'checkbox'
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

const onAfterInsertRow = row => {
  let newBook = {};

  for (const prop in row) {
    newBook += prop + ': ' + row[prop] + ' \n';
  }
}

const options = insertNewData => {
  afterInsertRow: onAfterInsertRow
};

const FendukTable = ({ data, insertNewData }) => (
  <div>
    <BootstrapTable className="fenduk-table"
                    data={data}
                    deleteRow
                    cellEdit={ cellEditProp }
                    insertRow={ true }
                    options={ options }
                    pagination
                    search
                    selectRow={ selectRowProp }
    >
      <TableHeaderColumn dataField="_id" dataAlign="center" dataSort hiddenOnInsert={true} editable={false}>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="title" isKey={true} dataSort={true}>Title</TableHeaderColumn>
      <TableHeaderColumn dataField="description" editable={{ type: 'textarea' }}>Description</TableHeaderColumn>
      <TableHeaderColumn dataField="author" dataSort>Author</TableHeaderColumn>
      <TableHeaderColumn dataField="tags">Tags</TableHeaderColumn>
      <TableHeaderColumn dataField="created_at" dataSort editable={{ type: 'datetime' }}>Created At</TableHeaderColumn>
      <TableHeaderColumn dataField="updated_at" dataSort editable={{ type: 'datetime' }}>Updated At</TableHeaderColumn>
    </BootstrapTable>
  </div>
);

export default FendukTable;