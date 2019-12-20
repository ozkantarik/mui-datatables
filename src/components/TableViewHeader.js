import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

export const defaultViewColStyles = theme => ({
  root: {
    padding: '24px',
  },
  rowsPerPage: {
    marginBottom: '24px',
  },
});

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function TableViewHeader(props) {
  const { classes, options, changeRowsPerPage } = props;
  const [state, setState] = React.useState({
    stickHead: options.fixedHeader,
    stickSummary: options.fixedSubHeader,
    rowsPerPage: options.rowsPerPage,
    minRowsPerPage: options.rowsPerPageOptions[0],
    maxRowPerPage: options.rowsPerPageOptions[options.rowsPerPageOptions.length - 1],
  });

  const handleChange = name => (event, value) => {
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
        setState({ ...state, [name]: value });
        changeRowsPerPage(parseInt(value) || 10);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormControlLabel
        control={<Switch checked={state.stickHead} onChange={handleChange('stickHead')} value="stickHead" />}
        label="Stick Head"
      />
      <FormControlLabel
        control={<Switch checked={state.stickSummary} onChange={handleChange('stickSummary')} value="stickSummary" />}
        label="Stick Summary"
      />
      <Typography gutterBottom>Number of Rows per Page</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={state.rowsPerPage}
        min={state.minRowsPerPage}
        max={state.maxRowPerPage}
        step={5}
        onChangeCommitted={handleChange('rowsPerPage')}
      />
      <FormHelperText>You can change different settings for table</FormHelperText>
    </FormControl>
  );
}

TableViewHeader.propTypes = {
  /** Extend the style applied to components */
  classes: PropTypes.object.isRequired,
  /** Options used to describe table */
  options: PropTypes.object.isRequired,
  /** Callback to trigger Rows per page update */
  changeRowsPerPage: PropTypes.func.isRequired,
};

export default withStyles(defaultViewColStyles, { name: 'MUIDataTableViewHeader' })(TableViewHeader);
