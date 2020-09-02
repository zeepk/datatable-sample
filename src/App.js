import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'bootswatch/dist/slate/bootstrap.min.css';
// import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div className="App">
			<DataTable
				style={{
					borderRadius: '5px',
					boxShadow: '1px 10px 29px 0px rgba(0,0,0,0.75)',
					margin: '5vh 5vw',
					padding: '20px',
				}}
				value={users}
				rowHover
			>
				<Column field="username" header="Username" filter></Column>
				<Column field="name" header="Name"></Column>
			</DataTable>
		</div>
	);
}

export default App;
