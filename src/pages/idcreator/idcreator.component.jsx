import React, { useRef } from "react";
import {
    Link
  } from "react-router-dom";
import classes from "./idcreator.module.css";
import Template1 from "../../templates/template 1/template1.component";
import Builder from "./builder.component";
import ReactToPrint from 'react-to-print';

const IdCreator = (props) => {
    const componentRef = useRef();

    return(
        <div className={classes.h100}>
            <div className={classes.idcreator}>
                <div className={classes.builder}>
                    <Builder handler = {props.act} action = {props.dis}/>
                    <ReactToPrint
                        trigger={() => <button className={classes.print} disabled ={props.btnAction}>Print IV now</button>}
                        content={() => componentRef.current}
                    />
                    <Link to="/e-iv" className={classes.back}>Back to home</Link>
                </div>
                <div className={classes.preview}>
                    <h2>Preview</h2>
                    <Template1
                        brideFamilyName = {props.bFn}
                        groomFamilyName = {props.gFn}
                        brideName = {props.bN}
                        groomName = {props.gN}
                        date = {props.date}
                        time = {props.time}
                        location = {props.loc}
                        description = {props.desc}
                        ref={componentRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default IdCreator;