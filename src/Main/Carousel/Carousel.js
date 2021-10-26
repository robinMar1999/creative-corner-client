import React, { Component } from "react";
import classes from "./Carousel.module.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

let settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default class Carousel extends Component {
  state = {
    loading: true,
    error: false,
    msg: "",
    info: [],
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/design/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        settings = {
          customPaging: function (i) {
            return (
              <a className={classes.Thumb}>
                <img src={res.data.info[i].url} />
              </a>
            );
          },
          dots: true,
          dotsClass: "slick-dots slick-thumb",
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        };
        this.setState({
          loading: false,
          info: res.data.info,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: true,
          msg: err.message,
        });
      });
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.info);
    let Content = null;
    if (this.state.loading) {
      Content = (
        <div className={classes.Loading}>
          <div className={classes.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else if (this.state.error) {
      Content = <div>{this.state.msg}</div>;
    } else {
      const images = [];
      this.state.info.forEach((ele) => {
        images.push(
          <div key={ele._id} className={classes.Image}>
            <img src={ele.url} alt={ele.name} />
          </div>
        );
      });
      Content = <Slider {...settings}>{images}</Slider>;
    }
    return (
      <div className={classes.Carousel}>
        <div className={classes.Button}>
          <Link to="/gallery">Back </Link>
        </div>

        {Content}
      </div>
    );
  }
}
