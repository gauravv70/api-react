import { Component } from "react";
import { Button } from "@material-ui/core";
import "./index.css"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/index'
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";


toast.configure();

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
      },
      location:{
        country:"",
        city:"",
        state:""
      }
    }
  }

  fetchData = () => {
    this.setState({ loading: true });
    toast.dismiss();
    fetch("https://randomuser.me/api")
      .then(res => res.json())
      .then(data => {
        const info = data.results[0];
        this.setState({
          name: info.name,
          gender: info.gender,
          email: info.email,
          picture: info.picture,
          phone: info.phone,
          dob: info.dob,
          loading: false,
          location: info.location
        });
        toast.success("Details updated!")
      }).catch(err => {
        this.setState({ loading: false });
        toast.error(err || "Error calling the api", "Error");
      })
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {
    const {
      loading,
      picture
    } = this.state
    return (
      <div>
        <Loader show={loading}></Loader>
        <div className="info-container">
          <div className="container">
            <div className="info-wrapper">
              <LeftSection
              data={this.state}
              />
              <RightSection 
              photoUrl ={picture.large}
              />
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            onClick={() => { this.fetchData() }}
            variant={"contained"}
            disabled={loading}
            color="secondary"
          >
            Next User
            </Button>
        </div>
      </div>
    )
  }
}
export default UserInfo;
