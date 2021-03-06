import React from 'react';
import axios from "axios";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../../style/nav.css"

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            userId:"",
            userEmail: "",
            isLogIn: false
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.isLogin();
    }


    isLogin = async () => {
        try {
            const response = await axios
                .get("/user");
            console.log(response.data);

            if (response.data) {
                this.setState({
                    userId: response.data._id,
                    userEmail: response.data.email,
                    isLogIn: true
                });
            } else {
                return
            }
        }
        catch (error) {
            console.log(error);
        };
    };

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    logOut() {
        axios.get("/logout")
            .then(
                () => {
                    window.location.href = "/"
                }
            )
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="white" dark expand="sm" fixed="top" style={{ minWidth: "1070px" }}>
                            <MDBNavbarBrand>
                                <a className="pink-text" href="/" style={{ fontSize: "20px", fontFamily: "montserrat", fontWeight: "bolder" }}><strong>QueerWed</strong></a>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>

                                {this.state.isLogIn ?
                                    <MDBNavbarNav left>
                                        <li className="mainLi"><a className="mainMenu" href="/planning">Planning Tools</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/planning">Your Event</a></li>
                                                    <li><a href="/planning/checklist">Check List</a></li>
                                                    <li><a href="/planning/guestlist">Guest List</a></li>
                                                    <li><a href="/planning/team">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/website">Create Your Website</a></li>                                                
                                                    <li><a href={`/website/user/${this.state.userId}`}>Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/registry">Wedding Registry</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/planning">Your Event</a></li>
                                                    <li><a href="/planning/checklist">Check List</a></li>
                                                    <li><a href="/planning/guestlist">Guest List</a></li>
                                                    <li><a href="/planning/team">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/website">Create Your Website</a></li>
                                                    <li><a href={`/website/user/${this.state.userId}`}>Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/website">Wedding Website</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/planning">Your Event</a></li>
                                                    <li><a href="/planning/checklist">Check List</a></li>
                                                    <li><a href="/planning/guestlist">Guest List</a></li>
                                                    <li><a href="/planning/team">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/website">Create Your Website</a></li>
                                                    <li><a href={`/website/user/${this.state.userId}`}>Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/team">Find Professionals</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/planning">Your Event</a></li>
                                                    <li><a href="/planning/checklist">Check List</a></li>
                                                    <li><a href="/planning/guestlist">Guest List</a></li>
                                                    <li><a href="/planning/team">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/website">Create Your Website</a></li>
                                                    <li><a href={`/website/user/${this.state.userId}`}>Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>
                                    </MDBNavbarNav>
                                    :
                                    <MDBNavbarNav left>
                                        <li className="mainLi"><a className="mainMenu" href="/login">Planning Tools</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/login">Your Event</a></li>
                                                    <li><a href="/login">Check List</a></li>
                                                    <li><a href="/login">Guest List</a></li>
                                                    <li><a href="/login">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/login">Create Your Website</a></li>
                                                    <li><a href="/login">Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/registry">Wedding Registry</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/login">Your Event</a></li>
                                                    <li><a href="/login">Check List</a></li>
                                                    <li><a href="/login">Guest List</a></li>
                                                    <li><a href="/login">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/login">Create Your Website</a></li>
                                                    <li><a href="/login">Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/login">Wedding Website</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/login">Your Event</a></li>
                                                    <li><a href="/login">Check List</a></li>
                                                    <li><a href="/login">Guest List</a></li>
                                                    <li><a href="/login">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/login">Create Your Website</a></li>
                                                    <li><a href="/login">Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="mainLi"><a className="mainMenu" href="/team">Find Professionals</a>
                                            <ul className="subMenuContainer">
                                                <div className="subMenu subMenu1">
                                                    <li><a href="/login">Your Event</a></li>
                                                    <li><a href="/login">Check List</a></li>
                                                    <li><a href="/login">Guest List</a></li>
                                                    <li><a href="/login">Your Vendors</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/registry">Create Your Registry</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/login">Create Your Website</a></li>
                                                    <li><a href="/login">Share My Website</a></li>
                                                </div>
                                                <div className="subMenu">
                                                    <li><a href="/team">Find Your Team</a></li>
                                                </div>
                                            </ul>
                                        </li>
                                    </MDBNavbarNav>
                                }
                            </MDBCollapse>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    {this.state.isLogIn ?
                                        <div className="joinMenuContainer" style={{ float: "right", minWidth:"180px"}}>
                                            <span className="m-1 joinMenu pink-text"><strong>{this.state.userEmail}</strong></span>
                                            <MDBBtn className="z-depth-0" color="pink" size="sm" onClick={this.logOut}>Log Out</MDBBtn>
                                            {/* <span className="m-1"><button className="joinMenu pink-text" style={{backgroundColor: "#fffff"}} onClick={this.logOut}>Log Out</button></span> */}
                                            {/* <span className="m-1"><a className="joinMenu grey-text" href="/login/vendor">Vendor</a></span> */}
                                        </div>
                                        :
                                        <div className="joinMenuContainer" style={{ float: "right", minWidth:"180px"}}>
                                            <span className="m-1"><a className="joinMenu pink-text" href="/signup">Sign Up</a></span>
                                            <span className="m-1"><a className="joinMenu pink-text" href="/login">Log In</a></span>
                                            <span className="m-1"><a className="joinMenu black-text" href="/login/vendor">Vendor</a></span>
                                        </div>
                                    }
                                </MDBNavItem>
                            </MDBNavbarNav>

                        </MDBNavbar>
                    </Router>
                </header>
            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;