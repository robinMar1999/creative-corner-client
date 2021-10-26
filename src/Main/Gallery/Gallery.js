import React, { Component } from "react";
import classes from "./Gallery.module.css";
import NewDesign from "./NewDesign/NewDesign";
import axios from "axios";
import Thumbnails from "./Thumbnails/Thumbnails";

export class Gallery extends Component {
  state = {
    selected: false,
    files: null,
    uploading: false,
    addedDesign: false,
    designs: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/design")
      .then((res) => {
        this.setState({
          designs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    if (this.state.addedDesign) {
      axios
        .get("http://localhost:5000/api/design")
        .then((res) => {
          this.setState({
            designs: res.data,
            addedDesign: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  fileChangeHandler = (event) => {
    console.log("fileChangeHandler");
    const files = event.target.files;
    if (files.length > 0) {
      console.log("length>0");
      this.setState({
        selected: true,
        files: files,
      });
    } else {
      this.setState({
        selected: false,
        files: null,
      });
    }
  };

  addDesignHandler = (event, fileInputRef) => {
    this.setState({
      uploading: true,
    });
    const formData = new FormData();
    // formData.append("photos", this.state.files[0]);
    console.log(this.state.files);
    for (let index in this.state.files) {
      formData.append("photos", this.state.files[index]);
    }
    axios({
      method: "POST",
      url: "http://localhost:5000/api/design",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        this.setState({
          uploading: false,
          selected: false,
          addedDesign: true,
        });
        fileInputRef.current.value = null;
      })
      .catch((err) => {
        this.setState({
          uploading: false,
        });
      });
  };

  render() {
    return (
      <div className={classes.Gallery}>
        <NewDesign
          changed={this.fileChangeHandler}
          clicked={this.addDesignHandler}
          selected={this.state.selected}
          uploading={this.state.uploading}
        />
        <Thumbnails designs={this.state.designs} />
      </div>
    );
  }
}

export default Gallery;
