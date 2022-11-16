import { Menu } from "antd";
import { UserAddOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const MyMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["/"]}
      onClick={({ key }) => {
        navigate(key);
      }}
      items={[
        { label: "Add User", key: "/", icon: <UserAddOutlined /> },
        { label: "User list", key: "/users", icon: <TeamOutlined /> },
      ]}
      theme="dark"
    ></Menu>
  );
};

export default MyMenu;
