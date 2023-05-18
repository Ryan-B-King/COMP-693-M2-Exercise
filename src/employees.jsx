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
        return(<div>This is a placeholder for the Employee Filter.</div>)
    }
}

class EmployeeTable extends React.Component {
    render() {
        return<div>This is a placeholder for the Employee Table.</div>
    }
}

class EmployeeAdd extends React.Component {
    render() {
        return<div>This is a placeholder for a form to add an employee.</div>
    }
}
class EmployeeList extends React.Component {
    render(){
        return(
        <React.Fragment>
            <h1>Employee Management Application</h1>
            <EmployeeFilter/>
            <hr/>
            <EmployeeTable/>
            <hr/>
            <EmployeeAdd/>
        </React.Fragment>
        )
    }
}
const contentNode = document.getElementById('content');

ReactDOM.render(<EmployeeList/>, contentNode)