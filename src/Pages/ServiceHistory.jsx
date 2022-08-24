import ServiceTable from "../components/ServiceHistory.table.jsx";
import ServiceHistoryTableHeader from "../components/ServiceHistory.tableHeader.jsx";
import "../styles/ServiceHistory.styles.scss";
export default function ServiceHistory() {
  const driversData = [
    {
      number: 44,
      name: "Lewis Hamilton",
      team: "Mercedes",
      dob: "07/01/1985",

    },
    {
      number: 77,
      name: "Valtteri Bottas",
      team: "Mercedes",
      dob: "28/08/1989",
    },
    {
      number: 5,
      name: "Sebastian Vettel",
      team: "Ferrari",
      dob: "03/07/1987",
    },
    {
      number: 16,
      name: "Charles Leclerc",
      team: "Ferrari",
      dob: "16/10/1997",
    },
  ];
  return (
    <>
      <ServiceHistoryTableHeader title="Service Records " />
      <ServiceTable
        tableData={driversData}
        headingColumns={["S.No.", "Car Number", "Date of Service", "View"]}
        title=""
      />
    </>
  );
}
