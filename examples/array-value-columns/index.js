import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src";
import Chip from '@material-ui/core/Chip';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


class Example extends React.Component {

  state = {
    stickHead: true,
    stickBlock: false,
    stickSummary: true,
    rowsPerPage: 100,
  }

  

  handleStickHead = (checked) => {
    this.setState({stickHead: checked});
  }
  handleStickBlock = (checked) => {
    this.setState({stickBlock: checked});
  }
  handleStickSummary = (checked) => {
    this.setState({stickSummary: checked});
  }

  render() {
    // const allTags = ['leave-message', 'frequently-busy', 'nice', 'grumpy', 'in-person', 'preferred', 'second-choice'];
    const columns = [
      {
        name: "Name",
        options: {
          filter: true,
          display: 'excluded',
        }
      },      
      {
        label: "Modified Title Label",
        name: "Title",
        options: {
          filter: true,
        }
      },
      {
        name: "Location",
        options: {
          print: false,
          filter: false,
        }
      },
      {
        name: "Age",
        exportLabel: "export age label",
        options: {
          filter: true,
          print: false,
          sort: true,
          multipleSortEnabled: true,
          multipleSortOptions: {
            label: 'Location',
            name: 'SalaryName',
            index: 2,
          },
          hasSubHeader: true,
        }
      },
      {
        name: "Salary",
        options: {
          filter: true,
          sort: true,
          download: false,
          hasSubHeader: true,
          multipleSortEnabled: true,
          multipleSortOptions: {
            label: 'SalaryLbl',
            name: 'SalaryName',
            index: 1,
          }
          // customSubHeader: (options) => {
          //   console.log(options);
          //   return 1;
          // }
        }
      },
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      }  ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      } ,
      {
        name: 'Tags',
        options: {
            filter: true,
            filterType: 'multiselect',
            customBodyRender: (value) => {
                return value.map( (val, key) => {
                    return <Chip label={val} key={key} />;
                });
            }
        }
      }     
    ];


    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'],['nice', 'preferred'] ],
    ];

    const dataSubHeader = 
      ['', '', '', [30, 301], ["100,000", "100,000"], [""]];

    const generateRowsPerPageOptions = (min, max, increment = 5) => {
      const options = [];
      for (let i = min; i <= max; i = i + increment) {
        options.push(i);
      }
      return options;
    };

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: this.state.stickBlock ? 'scrollFullHeight' : 'scrollMaxHeight', //PropTypes.oneOf(['stacked', 'scrollMaxHeight', 'scrollFullHeight']),
      fixedHeader: this.state.stickHead,
      fixedBlock: this.state.stickBlock,
      fixedSubHeader: this.state.stickSummary,
      viewTableOptions: true,
      downloadExtended: true,
      rowsPerPage: this.state.rowsPerPage,
      onStickHead: this.handleStickHead,
      onStickBlock: this.handleStickBlock,
      onStickSummary: this.handleStickSummary,
      // responsive: 'scrollMaxHeight',
      rowsPerPage: 100,
      rowsPerPageOptions: generateRowsPerPageOptions(10, 100, 5),
      onTableInit: (action, tableState) => {
        console.log('onTableInit', action, tableState);
      },
      onTableChange: (action, tableState) => {
        console.log('onTableChange', action, tableState);
      },
      onChangeRowsPerPage: (numberOfRows) => {
        this.setState({...this.state, rowsPerPage: numberOfRows});
        console.log(numberOfRows);
      }
    };

    return (
        <MUIDataTable title={"ACME Employee list"} data={data} dataSubHeader={dataSubHeader} columns={columns} options={options} />
      
    );

  }
}

export default Example;
