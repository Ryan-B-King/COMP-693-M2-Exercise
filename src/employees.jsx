let ryan = 'Ryan King'
let sally = 'Sally Smith'
let john = 'John Doe'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let justin = 'Justin Tyme'
let chris = 'Chris Columbus'
let amanda = 'Amanda Bynes'

const element = (
        <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
            <li>{ryan}</li>
            <li>{sally}</li>
            <li>{john}</li>
            <li>{amol}</li>
            <li>{robin}</li>
            <li>{justin}</li>
            <li>{chris}</li>
            <li>{amanda}</li>
        </ul>
        )

ReactDOM.render(element, document.getElementById('content'))