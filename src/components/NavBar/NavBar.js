import React from "react"
import { Link, withRouter } from "react-router-dom"
import { AppBar, Tabs, Tab } from "@material-ui/core"

const NavBar = ({ history }) => {
    const menuItems = [
        { value: 0, to: "/", label: "Lista albumów" },
        { value: 1, to: "/dodaj-album", label: "Dodaj album" },
    ]

    const setSelectedTab = () => {
        const path = history.location.pathname
        const selectedTab = menuItems.find(menuItem => menuItem.to === path)

        return selectedTab.value
    }

    return (
        <AppBar position="static">
            <Tabs value={setSelectedTab()}>
                {menuItems.map(menuItem => (
                    <Tab component={Link} key={menuItem.value} {...menuItem} />
                ))}
            </Tabs>
        </AppBar>
    )
}

export default withRouter(NavBar)
