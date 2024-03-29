import React from "react";

class BadgeForm extends React.Component {
  //   state = {
  //       jobTitle: "Designer", //En en caso que queramos inicializar el estado "jobTitle" cuando recargemos la página, nos saldrá ya escrito. El usuario siempre lo puedo cambiar.
  //   };
  // handleChange = (e) => {
  // console.log({
  //  name: e.target.name,
  //  value: e.target.value,
  // });

  //  this.setState({
  //    [e.target.name]: e.target.value,
  //   });
  // };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submitted");
  //   console.log(this.state) //Cuando termine el formulario será impreso el estado.
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            {/*Buscar "Form-Groups" Bootstrap     THAT'S THE WAY HOW TO COMMENT INSIDE CHILDREN SECTION REACT/JSX*/}
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName} //Para leer de ESTADO "this.state", para escribir de ESTADO "this.setState".
            ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            ></input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            ></input>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
