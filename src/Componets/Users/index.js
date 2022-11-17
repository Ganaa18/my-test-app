import { Table, Spin } from "antd";
import { useEffect, useState } from "react";
import css from "./style.module.css";
import axios from "axios";
const columns = [
  {
    title: "ID",
    dataIndex: "Id",
    key: "Id",
  },
  {
    title: "First Name",
    dataIndex: "FirstName",
    key: "FirstName",
  },
  {
    title: "Last Name",
    key: "LastName",
    dataIndex: "LastName",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "Age",
    dataIndex: "Age",
    key: "Age",
  },
  {
    title: "BirthDate",
    dataIndex: "BirthDate",
    key: "BirthDate",
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    key: "Gender",
  },
];
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://my-test-app-e26cd-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        setLoading(false);
        const usersFromDB = [];
        const arr = Object.entries(response.data);
        arr.forEach((el) => {
          usersFromDB.push({
            ...el[1],
            Id: el[0],
          });
        });
        setUsers(usersFromDB);
        //console.log(usersFromDB);
      });
  });
  return (
    <Spin spinning={loading}>
      <Table
        columns={columns}
        className={css.Table}
        dataSource={users}
        pagination={false}
      />
    </Spin>
  );
};

export default Users;
