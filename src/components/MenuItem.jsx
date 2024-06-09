import { NavLink } from "react-router-dom"

export default function MenuItem({ label, link }) {

    const classname = ({ isActive }) => isActive ? "menu__item menu__item-active " : "menu__item"

    return (
        <NavLink to={link} className={classname}>
            {label.toUpperCase()}
        </NavLink>
    )
}
