import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to= '/todolist' name='To-do'/>
                <Menu.Item>
                    <Button as={NavLink} to= '/counter' positive content='Counter' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}