import React from 'react';
import { Menu, Container } from 'semantic-ui-css'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name='Star Wars Api' />                
                </Link>

                <Link to='/people'>
                    <Menu.Item name='People' />                
                </Link>
                
                <Link to='/favoririte'>
                    <Menu.Item name='Favorite' />
                </Link>
                
            </Container>
        </Menu>
    );
}