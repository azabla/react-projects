
import MenuList from "./menu-list";
import "./style.css";

export default function TreeList({ menus = [] }) {
  return (
    <div className="tree-list-container">
      <MenuList list={menus} />
    </div>
  );
}
