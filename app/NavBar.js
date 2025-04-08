"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';

// import "../styles/NavbarStyles.css";



export default function NavBar() {
    
    const location = usePathname();

    const hideArrow = location === "/";

    return (
        <>

        <div id="navbar">

                <div className="menu-bars" id="show-menu" style={{display: hideArrow ? "block" : "none" }}>
                    <FontAwesomeIcon icon={faBars} id="Bars" />
                </div>
                <Link href="/" style={{ display: hideArrow ? "none" : "block" }} onClick={() => 
                {document.querySelector('body').classList.add('preload'); 
                }}>
                    <div className="menu-bars" id="return" title="Return to Calendar" >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </Link>


                <div className="nav-container" id="nav-container">
                <div className="search-bar-container" id="search-bar-container">
                    <div id="search-results" className="search-input">
                    <input type="text" id="search-bar" placeholder="Search tasks..." />
                    <button id="close-search" className="close-search"><FontAwesomeIcon icon={faXmark} /></button>
                    <button className="filter-search btn" id="btn"><FontAwesomeIcon icon={faSliders} /> </button>
                    <div className="filter-container" id="filter-container">
                        <a id="title">
                        <h1>Filters</h1>
                        </a>
                        <hr />
                        <a id="priority-label">
                        <p>Priority: </p>
                        <select id="priority-button">
                            <option value="All">All</option>
                            <option id="critical" value="Critical">Critical</option>
                            <option id="urgent" value="Urgent">Urgent</option>
                            <option id="high-priority" value="High Priority">High Priority</option>
                            <option id="medium-priority" value="Medium Priority">Medium Priority</option>
                            <option id="low-priority" value="Low Priority">Low Priority</option>
                        </select>
                        </a>
                        <a id="category-label">
                        <p>Category: </p>
                        <select id="category-button">
                            <option value="All">All</option>
                            <option id="new-landscaping" value="New Landscaping">New Landscaping</option>
                            <option id="site-clearing" value="Site Clearing">Site Clearing</option>
                            <option id="high-priority" value="Plant Maintenance">Plant Maintenance</option>
                            <option id="grass-maintenance" value="Grass Maintenance">Grass Maintenance</option>
                            <option id="general-maintenance" value="General Maintenance">General Maintenance</option>
                        </select>
                        </a>
                        <a id="status-label">
                        <p>Status: </p>
                        <select id="status-button">
                            <option value="All">All</option>
                            <option value="Pending">Pending</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="results-container" id="results">
                    <ul id="results-list" />
                </div>
                </div>
                <a className="menu-bars" id="show-menu2">
                <FontAwesomeIcon icon={faBars} />
                </a>
            </div>

                <nav id="nav-menu">
                <div className="nav-menu-items">
                <div id="navbar-toggle">
                    <a className="menu-bars" id="hide-menu" >
                    <FontAwesomeIcon icon={faBars} className="nav-icon" id="menu-bar" />
                    </a>
                    <a><h1>Task Manager</h1></a>
                </div>
                <hr />
                <div className="nav-section">
                <Link href="/stats" className="nav-text" id="stats-button"
                onClick={() => {
                    sideMenu.classList.remove('active');
                    if (navBar) navBar.style.removeProperty("pointer-events")
                    if (slideContainer) slideContainer.style.removeProperty("pointer-events")
                    isMouseOverBar = true;
                }}>
                <FontAwesomeIcon icon={faChartSimple} className="nav-icon"/>
                Stats
                </Link>
                <Link href="/details" className="nav-text" id="new-task-button"
                onClick={() => {
                    sideMenu.classList.remove('active');
                    localStorage.removeItem('selectedTask');
                    localStorage.removeItem('listOfTasks');
                    if (navBar) navBar.style.removeProperty("pointer-events")
                        if (slideContainer) slideContainer.style.removeProperty("pointer-events")
                    isMouseOverBar = true;
                }}>
                <FontAwesomeIcon icon={faPlus} className="nav-icon"/>
                Add New Task
                </Link>
                </div>
                <hr />
                <div className="nav-section">
                    <li className="nav-text" id="delete-storage-button"><a><FontAwesomeIcon icon={faTrashCan} className="nav-icon"/>Delete Storage</a></li>
                </div>
                <hr />
                </div>
            </nav>

            <Script src="/Scripts/Searchbar.js" strategy="afterInteractive"/>
            <Script src="/Scripts/DropDown.js" strategy="afterInteractive"/>
            <Script src="/Scripts/Sidebar.js" strategy="afterInteractive" async="true" />
        </>
    );
}