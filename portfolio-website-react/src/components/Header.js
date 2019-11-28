import React from "react";
import styled from "styled-components";
import LinkLabels from "./LinkLabels";

const NavList = styled.nav`
    background: #282828;
    height: 51px;

`

// the ul tag appears to keep the elements evenly spaced
const UnorderedList = styled.ul`

    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    max-width: 40%;
    height: 100%;
    margin: 0 auto;

`



const ListItem = styled.li`

    padding: 10px 20px;
    // padding-left: 20px;
    // padding-right: 20px;
    // padding-top: 10px;
    // padding-bottom: 10px;

    &:hover {
        cursor: pointer;
        border-radius: 8px;
        background-color: #383838;
        transition: background-color .2s ease-in-out;
    }
`

const NavAnchor = styled.a`

    // don't seem to have much control over how a semantic tag presents itself

    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: arial;

    font-size: 0.95rem;
    // border: 1px solid green;
    // max-height: 100%;
    // padding: 0 auto;
    
    
`


class Header extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (

            <NavList>
                <UnorderedList>
                    {LinkLabels.map(LinkLabel => (
                        <ListItem>
                            <NavAnchor href="#">{LinkLabel}</NavAnchor>
                        </ListItem>
                    ))}
                </UnorderedList>
            </NavList>
        )
    }
}
export default Header;