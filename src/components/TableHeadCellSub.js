import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const defaultHeadCellStyles = theme => ({
  root: {},
  fixedHeader: {
    position: 'sticky',
    top: '56px',
    left: '0px',
    zIndex: 200,
    backgroundColor: theme.palette.background.paper,
  },
  tooltip: {
    cursor: 'pointer',
  },
  mypopper: {
    '&[data-x-out-of-boundaries]': {
      display: 'none',
    },
  },
  data: {
    display: 'inline-block',
  },
});

class TableHeadCellSub extends React.Component {
  static propTypes = {
    /** Extend the style applied to components */
    classes: PropTypes.object,
    /** Options used to describe table */
    options: PropTypes.object.isRequired,
    /** Optional to be used with `textLabels.body.columnHeaderTooltip` */
    column: PropTypes.object,
  };

  state = {
    isSortTooltipOpen: false,
    isHintTooltipOpen: false,
  };

  handleKeyboardSortinput = e => {
    if (e.key === 'Enter') {
      this.props.toggleSort(this.props.index);
    }

    return false;
  };

  handleSortClick = () => {
    this.props.toggleSort(this.props.index);
  };

  render() {
    const { children, classes, options, sortDirection } = this.props;
    const sortActive = sortDirection !== 'none' && sortDirection !== undefined ? true : false;

    const cellClass = classNames({
      [classes.root]: true,
      [classes.fixedHeader]: options.fixedHeader,
    });

    return (
      <TableCell className={cellClass}>
        <div
          className={classNames({
            [classes.data]: true,
            [classes.sortActive]: sortActive,
          })}>
          {children}
        </div>
      </TableCell>
    );
  }
}

export default withStyles(defaultHeadCellStyles, { name: 'MUIDataTableHeadCellSub' })(TableHeadCellSub);
