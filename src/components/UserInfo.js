import { Component } from "react";
import toastr from "reactjs-toastr/lib/react-toast";
import { Button } from "@material-ui/core";
import "./UserInfo.css"
import Loader from "./Loader";


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: {
        title: "",
        first: "",
        last: ""
      },
      gender: "",
      email: "",
      picture: {
        large: ""
      },
      phone: "",
      dob: {
        age: 0,
        date: ""
      }
    }
  }

  fetchData = () => {
    this.setState({ loading: true })
    fetch("https://randomuser.me/api")
      .then(res => res.json())
      .then(data => {
        const info = data.results[0];
        console.log(info);
        this.setState({
          name: info.name,
          gender: info.gender,
          email: info.email,
          picture: info.picture,
          phone: info.phone,
          dob: info.dob,
          loading: false
        });
      }).catch(err => {
        this.setState({ loading: false })
        console.log(err || "Error calling the api")
      })
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {
    const {
      name,
      dob,
      email,
      phone,
      picture,
      gender,
      loading
    } = this.state
    return (
      <div>
        <Loader show={loading}></Loader>
        <div className="container">
          <div className="info-wrapper">
            <div className="thumbnail">
              <img src={picture.large} alt={"user-thumbnail"} className="thumbnail"></img>
            </div>
            <div className="info">
             <strong> Name:</strong> {name.first + " " + name.last}
            </div>
            <div className="info">
            <strong>Email:</strong> {email}
            </div>
            <div className="info">
            <strong>Gender: </strong> {gender}
            </div>
            <div className="info">
            <strong>Age:</strong> {dob.age}
            </div>
            <div className="info">
            <strong>Contact Number: </strong>{phone}
            </div>
            <div className="button">
              <Button
                onClick={() => { this.fetchData() }}
                variant={"contained"}
                disabled={loading}
                color="secondary"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UserInfo;
