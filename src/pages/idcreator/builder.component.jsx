import React from "react";

import classes from "./builder.module.css";
import temp1 from "./../../assets/img/template1.png";
import temp2 from "./../../assets/img/template2.png";

class Builder extends React.Component {
  
    render() {
      return (
        <div className={classes.h100}>
            <h2 className={classes.title}>Start creating your digital IV</h2>
            <form onSubmit={this.createIV}>
                <div>
                    <p>Select your Template</p>
                </div>
                <label className={classes.temImg}>
                    <input type="radio" name="template" defaultChecked />
                    <img src={temp1} alt="first_template" />
                </label>
                <label className={classes.temImg}>
                    <input type="radio" name="template" />
                    <img src={temp2} alt="second_template" />
                </label>
                <div className={classes.row}>
                    <div className={classes.formfield}>
                        <p>Bride's Family Name</p>
                        <input type="text" name="brideFamName" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Groom's Family Name</p>
                        <input type="text" name="grmFamName" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Bride's Name</p>
                        <input type="text" name="brideName" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Groom's Name</p>
                        <input type="text" name="groomName" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Date</p>
                        <input type="text" name="date" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Time</p>
                        <input type="text" name="time" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Location</p>
                        <input type="text" name="location" onChange = {this.props.handler} />
                    </div>
                    <div className={classes.formfield}>
                        <p>Additional Information</p>
                        <textarea name="desc" onChange = {this.props.handler}></textarea>
                    </div>
                </div>
                <input type="submit" value="Submit" />
                <a href="/">Back to home</a>
            </form>
        </div>
      );
    }
  }

export default Builder;