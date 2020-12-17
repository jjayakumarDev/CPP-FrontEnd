import { Component } from 'react';
import Services from './Services';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
          profileData: []
        }
    }

    componentDidMount(){
      Services.getEmployee('4').then((res) => {
          this.setState({profileData:res.data})
      });
    }

    render(){
        return(
            <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Personal</strong>
          <h3 class="mb-0">Name: {this.state.profileData.firstName}</h3>
          <div class="mb-1 text-muted">Surname: {this.state.profileData.surname}</div>
          <div class="mb-1 text-muted">Email: {this.state.profileData.email}</div>
          <div class="mb-1 text-muted">Phone Number: {this.state.profileData.phoneNumber}</div>
          <div class="mb-1 text-muted">Age: {this.state.profileData.age}</div>
          <div class="mb-1 text-muted">Gender: {this.state.profileData.gender}</div>
            
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Company</strong>
          <h3 class="mb-0">ID: {this.state.profileData.employeeId}</h3>
          <div class="mb-1 text-muted">Hire Date: {this.state.profileData.hireDate}</div>
          <div class="mb-1 text-muted">Role: {this.state.profileData.role}</div>
          <div class="mb-1 text-muted">Salary: {this.state.profileData.salary}</div>
          <div class="mb-1 text-muted">Date of Join: {this.state.profileData.startDate}</div>
          <div class="mb-1 text-muted">Year of Experience: {this.state.profileData.yearsOfExp}</div>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>

        );
    }
}

export default Profile;