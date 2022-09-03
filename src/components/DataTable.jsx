import "../styles/DataTable.styles.scss";
import { DataGrid } from "@mui/x-data-grid";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const columns = [
  { field: "id", headerName: "S.No" },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
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
  { field: "status", headerName: "Status", sortable: true, width: 150 },
];

const rows = [
  { id: 1, name: "Aviral", carNo: "Snow", time: "12-2-2", bill: "Jon" },
  { id: 2, name: "Aviral", carNo: "Lannister", time: "12-2-2", bill: "Cersei" },
  { id: 3, name: "Aviral", carNo: "Lannister", time: "12-2-2", bill: "Jaime" },
  { id: 4, name: "Aviral", carNo: "Stark", time: "12-2-2", bill: "Arya" },
  {
    id: 5,
    name: "Aviral",
    carNo: "Targaryen",
    time: "12-2-2",
    bill: "Daenerys",
  },
  { id: 6, name: "Aviral", carNo: "Melisandre", time: "12-2-2", bill: "aa" },
  { id: 7, name: "Aviral", carNo: "Clifford", time: "12-2-2", bill: "Ferrara" },
  { id: 8, name: "Aviral", carNo: "Frances", time: "12-2-2", bill: "Rossini" },
  { id: 9, name: "Aviral", carNo: "Roxie", time: "12-2-2", bill: "Harvey" },
];

export default function DataTable() {
  return (
    <div
      style={{
        height: "auto",
        width: "80%",
        marginTop: "4rem",
        boxShadow:
          "rgba(79, 71, 235, 0.3) 0px 1px 2px,rgba(79, 71, 235, 0.3) 0px 4px 15px, rgba(79, 71, 235, 0.3) 0px 8px 20px,rgba(80, 71, 235, 0.3) 0px 8px 16px, rgba(80, 71, 235, 0.3) 0px 16px 32px,rgba(79, 71, 235, 0.3) 0px 32px 64px",
        borderRadius: "2rem",
      }}
    >
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        style={{ border: "none", padding: "1rem" }}
      />
    </div>
  );
}
