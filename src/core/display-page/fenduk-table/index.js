import React  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import '../styles.css';

const selectRowProp = {
  mode: 'checkbox'
};

const FendukTable = ({ data }) => (
  <div>
    <button
      id="new-fenduk-btn"
      type="button"
      className="btn btn-outline-primary"
    >
      Create New Fenduk
    </button>

    <BootstrapTable className="fenduk-table"
                    data={data}
                    deleteRow
                    pagination
                    search
                    selectRow={ selectRowProp }
    >
      <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
      <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
      <TableHeaderColumn dataField="author" dataSort>Author</TableHeaderColumn>
      <TableHeaderColumn dataField="tags">Tags</TableHeaderColumn>
      <TableHeaderColumn dataField="created_at" dataSort>Created At</TableHeaderColumn>
      <TableHeaderColumn dataField="updated_at" dataSort>Updated At</TableHeaderColumn>
    </BootstrapTable>
  </div>
);

export default FendukTable;