import { useState } from "react";
import logo from "@assets/images/logos/logo.png";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// import "./Sidebar.css";

export interface SidebarItem {
  id: number;
  title: string;
  icon: IconDefinition;
  url: string;
}
interface Props {
  sidebarItems: SidebarItem[];
}

const Sidebar = ({ sidebarItems }: Props) => {
  const [activeItem, setActiveItem] = useState(sidebarItems?.[0]?.id);
  const navigate = useNavigate();

  const handleItemClick = (item: SidebarItem) => {
    console.log("item:", item);
    setActiveItem(item.id);
    navigate(item.url);
  };

  return (
    <div className="sidebar-wrapper container-fluid row border border-2 border-success">
      <div className="px-sm-2 px-0">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-dark min-vh-100">
          <div className="d-none d-sm-flex justify-content-center mb-sm-3">
            <img width="150" className="img-fluid" src={logo} alt="logo" />
          </div>

          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
            {sidebarItems?.map((item) => (
              <li
                className={`sidebar-list-item rounded-3 align-middle px-2 py-1 my-2 ${
                  item.id === activeItem && "bg-success-subtle"
                }`}
                onClick={() => handleItemClick({ ...item })}
                title={item.title}
                key={item.id}
              >
                <FontAwesomeIcon
                  width={18}
                  height={18}
                  icon={item.icon}
                  className={`mx-2 mx-sm-0 ${
                    item.id === activeItem && "text-success"
                  }`}
                />

                <span
                  className={`ms-1 d-none d-sm-inline ${
                    item.id === activeItem && "text-success"
                  }`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
