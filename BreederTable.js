import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const BreederTable = ({ parents }) => {
	const defaultColDef = {
		floatingFilter: true,
		sortable: true,
		width: 150,
		resizable: true,
		suppressResize: true
	};

	const dynamicCellStyle = (params) => {
		if (params.value == 'Blue Bicolor') {
			return { color: '#ffffff', backgroundColor: '#e3d5ca' };
		} else if (params.value == 'Blue Point Bicolor' || params.value == 'Blue Lynx Bicolor') {
			return { color: '#ffffff', backgroundColor: '#eddcd2' };
		} else if (params.value == 'Seal Point Bicolor' || params.value == 'Seal Bicolor') {
			return { color: '#ffffff', backgroundColor: '#9c6644' };
		} else if (params.value == 'Seal Lynx Bicolor') {
			return { color: '#ffffff', backgroundColor: '#ddb892' };
		} else {
			return { color: '#ffffff', backgroundColor: '#ffe8d6' };
		}
	};

	const cellClassRules = {
		'cell-king': (params) => params.value === 'King',
		'cell-queen': (params) => params.value === 'Queen'
	};

	return (
		<section className="table_section">
			<div className="ag-theme-alpine table_size">
				<AgGridReact rowHeight={55} defaultColDef={defaultColDef} rowData={parents}>
					<AgGridColumn field="title" cellClassRules={cellClassRules} />
					<AgGridColumn field="Name" filter={true} />
					<AgGridColumn field="Birthday" />
					<AgGridColumn field="Gender" filter={true} />
					<AgGridColumn field="Color" filter={true} cellStyle={dynamicCellStyle} />
					<AgGridColumn field="Type" />
					<AgGridColumn field="Parents" />
					<AgGridColumn field="DNAtest" />
					<AgGridColumn field="BloodGroup" />
				</AgGridReact>
			</div>
		</section>
	);
};

export default BreederTable;
