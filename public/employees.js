// let ryan = 'Ryan King'
// let sally = 'Sally Smith'
// let john = 'John Doe'
// let amol = 'Amol Shookup'
// let robin = 'Robin Banks'
// let justin = 'Justin Tyme'
// let chris = 'Chris Columbus'
// let amanda = 'Amanda Bynes'

// const element = (

//         <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
//             <li>{ryan}</li>
//             <li>{sally}</li>
//             <li>{john}</li>
//             <li>{amol}</li>
//             <li>{robin}</li>
//             <li>{justin}</li>
//             <li>{chris}</li>
//             <li>{amanda}</li>
//         </ul>

//     )

// ReactDOM.render(element, document.getElementById('content'))

// // Sample function component
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// ReactDOM.render(<Welcome name = 'Ryan King' />, document.getElementById('content'))

// Sample class component

class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the Employee Filter.");
  }
}
class EmployeeTable extends React.Component {
  render() {
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "800px",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Extension"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Email"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employee_name: "Ryan King",
      employee_ext: 7013,
      employee_email: "ryan13king@gmail.com",
      employee_title: "Escrow Officer"
    }), /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employee_name: "Sally Smith",
      employee_ext: 1125,
      employee_email: "sally@gmail.com",
      employee_title: "Director of Data"
    })));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_name), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_ext), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_email), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_title));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an employee.");
  }
}
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null));
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeList, null), contentNode);