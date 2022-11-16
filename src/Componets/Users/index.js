import { Table } from "antd";
import css from "./style.module.css";
const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "fname",
    key: "fname",
  },
  {
    title: "Last Name",
    key: "lname",
    dataIndex: "lname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];
const Users = () => {
  return <Table columns={columns} className={css.Table} />;
};

export default Users;
