import { withStyles } from '@material-ui/core/styles';
import MuiTableHead from '@material-ui/core/TableHead';
import classNames from 'classnames';
import React from 'react';
import { findDOMNode } from 'react-dom';
import TableHeadCell from './TableHeadCell';
import TableHeadCellSub from './TableHeadCellSub';
import TableHeadRow from './TableHeadRow';
import TableSelectCell from './TableSelectCell';
import Typography from '@material-ui/core/Typography';

const defaultHeadStyles = theme => ({
  main: {},
  responsiveStacked: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  subheader: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
});

class TableHead extends React.Component {
  componentDidMount() {
    this.props.handleHeadUpdateRef(this.handleUpdateCheck);
  }

  handleToggleColumn = (index, secondIndex) => {
    this.props.toggleSort(index, secondIndex);
  };

  handleRowSelect = () => {
    this.props.selectRowUpdate('head', null);
  };

  render() {
    const { activeColumn, activeSubColumn, classes, columns, count, options, data, dataSubHeader, setCellRef, selectedRows } = this.props;
    const numSelected = (selectedRows && selectedRows.data.length) || 0;
    const isDeterminate = numSelected > 0 && numSelected < count;
    const isChecked = numSelected === count ? true : false;

    return (
      <MuiTableHead
        className={classNames({ [classes.responsiveStacked]: options.responsive === 'stacked', [classes.main]: true })}>
        <TableHeadRow>
          <TableSelectCell
            ref={el => setCellRef(0, findDOMNode(el))}
            onChange={this.handleRowSelect.bind(null)}
            indeterminate={isDeterminate}
            checked={isChecked}
            isHeaderCell={true}
            expandableOn={options.expandableRows}
            selectableOn={options.selectableRows}
            fixedHeader={options.fixedHeader}
            selectableRowsHeader={options.selectableRowsHeader}
            isRowSelectable={true}
          />
          {columns.map(
            (column, index) =>
              column.display === 'true' &&
              (column.customHeadRender ? (
                column.customHeadRender({ index, ...column }, this.handleToggleColumn)
              ) : (
                <TableHeadCell
                  key={index}
                  index={index}
                  type={'cell'}
                  ref={el => setCellRef(index + 1, findDOMNode(el))}
                  sort={column.sort}
                  sortDirection={column.sortDirection}
                  activeColumn={activeColumn}
                  activeSubColumn={activeSubColumn}
                  toggleSort={this.handleToggleColumn}
                  hint={column.hint}
                  print={column.print}
                  options={options}
                  column={column}>
                  {column.label}
                </TableHeadCell>
              )),
          )}
        </TableHeadRow>
        {options.fixedSubHeader && (
          <TableHeadRow>
            <TableHeadCellSub options={options}>{''}</TableHeadCellSub>
            {columns.map(
              (column, index) =>
                column.display === 'true' &&
                (column.hasSubHeader === true ? (
                  <TableHeadCellSub key={`${index}_${index}`} options={options}>
                    {Array.isArray(dataSubHeader[index]) &&
                      dataSubHeader[index].map((subheader, index) => (
                        <Typography key={`${index}_${index}`} className={classes.subheader}>
                          {subheader}
                        </Typography>
                      ))}
                  </TableHeadCellSub>
                ) : (
                  <TableHeadCellSub key={`${index}_${index}`} options={options}>
                    {''}
                  </TableHeadCellSub>
                )),
            )}
          </TableHeadRow>
        )}
      </MuiTableHead>
    );
  }
}

export default withStyles(defaultHeadStyles, { name: 'MUIDataTableHead' })(TableHead);
