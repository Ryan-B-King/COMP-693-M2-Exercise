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
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the Employee Table.");
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