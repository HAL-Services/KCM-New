export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "Name",
    width: 90,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_user">{params.row.username}</div>;
    },
  },
  {
    field: "carNumber",
    headerName: "Car Number",
    width: 130,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_carNumber">{params.row.carNumber}</div>;
    },
  },
  {
    field: "carModel",
    headerName: "Car Model",
    width: 130,
    sortable: false,
    renderCell: (params) => {
      return <div>{params.row.carModel}</div>;
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.date}</div>;
    },
  },
  {
    field: "time",
    headerName: "Time",
    width: 150,
    sortable: false,
    renderCell: (params) => {
      return <div>{params.row.time}</div>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.booking}`}>
          {params.row.booking}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    email: "lovjeets98@gmail.com",
    carNumber: "up14",
    carModel: "i20",
    username: "Luvjeet",
    date: "asega",
    time: "danejfa",
    booking: "active",
  },
];
