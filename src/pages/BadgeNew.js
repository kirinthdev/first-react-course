import React from "react";

//import Navbar from "../components/Navbar";
import header from "../images/clouds-logo.png";
import "../components/styles/Navbar.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm"; //Formulario - Enlazando eventos
import "./styles/BadgeNew.css";
import api from "../api";
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push(("/badges"));  
    } catch (error) {
        this.setState({ loading: false, error: error });
      }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        {/*<Navbar />*/}
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "JOB_TITTLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              />
            </div>

            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
