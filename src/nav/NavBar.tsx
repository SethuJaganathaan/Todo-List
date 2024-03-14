import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/todolist' name='To-do' />
                <Menu.Item as={NavLink} to='/counter' name='Counter' />
                <Menu.Item as={NavLink} to='/calculator' name='Calculator' />
                {/* <Menu.Item>
                    <Button as={NavLink} to='/calculator' positive content='calculator' />
                </Menu.Item> */}
            </Container>
        </Menu>
    )
}