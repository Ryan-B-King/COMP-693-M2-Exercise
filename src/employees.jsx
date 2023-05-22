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
        const rowStyle = {border:"1px solid silver", padding: 4}
        return (
            <table style = {{width: "800px", borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style = {rowStyle}>Name</th>
                        <th style = {rowStyle}>Extension</th>
                        <th style = {rowStyle}>Email</th>
                        <th style = {rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow rowStyle={rowStyle}
                        employee_name="Ryan King"
                        employee_ext={7013}
                        employee_email="ryan13king@gmail.com"
                        employee_title="Escrow Officer"
                    />
                    <EmployeeRow rowStyle={rowStyle}
                        employee_name="Sally Smith"
                        employee_ext={1125}
                        employee_email="sally@gmail.com"
                        employee_title="Director of Data"
                    />
                </tbody>
            </table>
        )
    }
}

class EmployeeRow extends React.Component {
    render() {
        const style = this.props.rowStyle
        return (
            <tr>
                <td style={style}>{this.props.employee_name}</td>
                <td style={style}>{this.props.employee_ext}</td>
                <td style={style}>{this.props.employee_email}</td>
                <td style={style}>{this.props.employee_title}</td>
            </tr>
        )
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