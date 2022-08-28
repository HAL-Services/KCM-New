import "../styles/DataTable.styles.scss";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "S.No" },
  {
    field: "carNo",
    headerName: "Car Number",
    width: 150,
  },
  {
    field: "time",
    headerName: "Date",
    width: 150,
  },
  {
    field: "bill",
    headerName: "Bill",
    sortable: false,
    width: 150,
  },
];

const rows = [
  { id: 1, carNo: "Snow", time: "12-2-2", bill: "Jon" },
  { id: 2, carNo: "Lannister", time: "12-2-2", bill: "Cersei" },
  { id: 3, carNo: "Lannister", time: "12-2-2", bill: "Jaime" },
  { id: 4, carNo: "Stark", time: "12-2-2", bill: "Arya" },
  { id: 5, carNo: "Targaryen", time: "12-2-2", bill: "Daenerys" },
  { id: 6, carNo: "Melisandre", time: "12-2-2", bill: "aa" },
  { id: 7, carNo: "Clifford", time: "12-2-2", bill: "Ferrara" },
  { id: 8, carNo: "Frances", time: "12-2-2", bill: "Rossini" },
  { id: 9, carNo: "Roxie", time: "12-2-2", bill: "Harvey" },
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: "80%", marginTop: "4rem" }}>
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
