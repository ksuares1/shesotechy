import React from "react";
import './index.css';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const HomePage = () => {
  return (
      <main>
      <div class="container">
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Welcome to ShesoTechy</h2>
            <h3 className="lead">
                Discover the inner techy in you!
              </h3>
           <br>
           </br>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
</div>

<br>
</br>
<br>
</br>

{/* Blog Cards */}
<h1 className="blog-title">ShesoTechy</h1>
<hr>
</hr>
<br>
</br>
<MDBCardGroup className="text-align:center">
      <MDBCard>
        <MDBCardImage src={require("../../assets/img/user-experience.jpg")} alt=" User Journey" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">User Experience</MDBCardTitle>
          <MDBCardText>
          Looking to create a new website? Mapping out your user journey can lead to more visits, and consumers purchasing your products. 
          </MDBCardText>
          <MDBBtn href="/login" color="primary" size="md">
            Find out How
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="text-align:center">
        <MDBCardImage src={require("../../assets/img/girl-typing.jpg")} alt="Family" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle  tag="h5">Family</MDBCardTitle>
          <MDBCardText>
            Connecting to our love one's when is an important part of their health journey. 
            Login to your account to view the latest medications being administered to your family member. 
          </MDBCardText>
          <MDBBtn href="/family" color="primary" size="md">
            Track
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={require("../../assets/img/women-tech.jpg")} alt= "Nurse with patient" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Patient</MDBCardTitle>
          <MDBCardText>
          Nurses can quickly and securely see  the latest medicial updates on their patients.
          </MDBCardText>
          <MDBBtn  href="/patient" color="primary" size="md">
            Update
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>

      
    </main>

    )
}

export default HomePage;