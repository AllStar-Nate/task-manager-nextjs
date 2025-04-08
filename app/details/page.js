"use client";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { use } from 'react';
import { useEffect } from 'react';
import "../styles/TaskDetails.css";

export default function Details() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/Scripts/Task-Details.js";
        script.async = false;
        document.body.appendChild(script);
        const mapScript = document.createElement('script');
        mapScript.src = "/Scripts/Maps.js";
        mapScript.async = false;
        document.body.appendChild(mapScript);
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(mapScript);
        }     
    }, []);
        return (
            
            <>
              
                <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Task Details</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Impact&display=swap" />
                </Head>
                <div className="container-bar">
                    <h1 id="task-header">New Task</h1>
                    <div id="nav-buttons" className="button-container">
                    <div className="buttons"> 
                        <div className="nav-buttons"> 
                        <button id="save-task-button" >Save Changes</button>
                        <button id="prev-task-button">Prev Task</button>
                        <button id="next-task-button">Next Task</button>
                        <button id="add-task-button">+New Task</button>
                        </div>    
                    </div>
                    </div>
                </div>
                <div id="task" className="task-container">
                    <div className="task-details">
                    <div className="title-container">
                        <p><label id="task-title">Title: <input type="text" id="task-title-input" placeholder="Add Title" /></label></p>
                        <p><label id="description">Description:
                            <textarea id="description-input" name="description" placeholder="Add Description" defaultValue={""} />
                        </label></p>
                    </div>
                    <div className="due-date-container">
                        <p><label> Start Date: <input type="date" id="task-start-date-input" /></label></p>
                        <p><label> Due Date: <input type="date" id="task-due-date-input" /></label></p>
                        <p><label> Completion Date: <input type="date" id="task-complete-date-input" /></label></p>
                    </div>
                    <div className="select-container">
                        <p><label id="task-priority"><span>Priority:</span>
                            <select id="task-priority-select" defaultValue={"Select your option"}>
                            <option value="Select your option" disabled>Select your option</option>
                            <option id="critical" value="Critical">Critical </option>
                            <option id="urgent" value="Urgent">Urgent</option>
                            <option id="high-priority" value="High Priority">High Priority</option>
                            <option id="medium-priority" value="Medium Priority">Medium Priority</option>
                            <option id="low-priority" value="Low Priority">Low Priority</option>
                            </select>
                        </label></p>
                        <p><label id="task-category"><span>Category:</span>
                            <select id="category-select" defaultValue={"Select your option"}>
                            <option value="Select your option" disabled>Select your option</option>
                            <option id="new-landscaping" value="New Landscaping">New Landscaping</option>
                            <option id="site-clearing" value="Site Clearing">Site Clearing</option>
                            <option id="high-priority" value="Plant Maintenance">Plant Maintenance</option>
                            <option id="grass-maintenance" value="Grass Maintenance">Grass Maintenance</option>
                            <option id="general-maintenance" value="General Maintenance">General Maintenance</option>
                            </select>
                        </label></p>
                        <p><label id="task-status"><span>Status:</span>
                            <select id="task-status-select" defaultValue={"Select your option"}>
                            <option value="Select your option" disabled>Select your option</option>
                            <option value="Pending">Pending</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                            </select>
                        </label></p>
                    </div>
                    {/*The div element for the map */}
                    <p><span id="map-header">Task Location:</span></p>
                    <div id="map">
                    </div>
                    <div className="media-container">
                        <p><span id="task-audio-header">Meeting Audio:</span></p>
                        <audio id="task-audio" controls>
                        <source src="Media/sample-audio.mp3" type="audio/mp3" />
                        </audio>
                        <p><span id="task-video-header">Meeting Video:</span></p>
                        <video id="task-video" controls>
                        <source src="Media/sample-video.mp4" type="video/mp4" />
                        </video>
                        <a id="task-document" href="Media/sample-document.pdf">Sample Document</a>
                        <label htmlFor="upload" className="uploadButton">Upload PDF</label>
                        <input type="file" name="upload" id="upload" accept="application/pdf" />
                    </div>
                    </div>
                </div>
            
            </>
        );






}