import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles';

export const defaultViewColStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function TableToolbarDownload(props) {
  const { classes, options, handleCSVDownload, handleTABDownload, handleXLSDownload } = props;
  const [state, setState] = React.useState({
    stickHead: options.fixedHeader,
    stickSummary: options.fixedSubHeader,
    rowsPerPage: options.rowsPerPage,
  });

  const handleChange = name => event => {
    switch (name) {
      case 'stickHead':
        options.onStickHead(event.target.checked);
        setState({ ...state, [name]: event.target.checked });
        break;
      case 'stickSummary':
        options.onStickSummary(event.target.checked);
        setState({ ...state, [name]: event.target.checked });
        break;
      case 'rowsPerPage':
        setState({ ...state, [name]: event.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={handleCSVDownload}>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="CSV Export" />
        </ListItem>
        <ListItem button onClick={handleTABDownload}>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="TAB Text" />
        </ListItem>
        <ListItem button onClick={handleXLSDownload}>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="XLS Export" />
        </ListItem>
      </List>
    </div>
  );
}

TableToolbarDownload.propTypes = {
  /** Extend the style applied to components */
  classes: PropTypes.object.isRequired,
  /** Options used to describe table */
  options: PropTypes.object.isRequired,
};

export default withStyles(defaultViewColStyles, { name: 'MUIDataTableToolbarDownload' })(TableToolbarDownload);
