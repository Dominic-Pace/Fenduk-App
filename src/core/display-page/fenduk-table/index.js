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

const FendukTable = ({ data, options }) => (
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
      <TableHeaderColumn dataField="_id" dataAlign="center" dataSort hiddenOnInsert={true} editable={false} isKey={ true } autoValue={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
      <TableHeaderColumn dataField="description" editable={{ type: 'textarea' }}>Description</TableHeaderColumn>
      <TableHeaderColumn dataField="author" dataSort>Author</TableHeaderColumn>
      <TableHeaderColumn dataField="tags">Tags</TableHeaderColumn>
      <TableHeaderColumn dataField="created_at" dataSort>Created At</TableHeaderColumn>
      <TableHeaderColumn dataField="updated_at" dataSort>Updated At</TableHeaderColumn>
    </BootstrapTable>
  </div>
);

export default FendukTable;