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
<h1 className="blog-title">ShesoTechy Blog</h1>
<hr className="line-dash">
</hr>
<br>
</br>
<MDBCardGroup className="text-align:center">
      <MDBCard>
        <MDBCardImage src={require("../../assets/img/user-experience.jpg")} alt=" User Journey" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle className="card-title" tag="h5">User Experience</MDBCardTitle>
          <MDBCardText>
          Looking to create a new website? Mapping out your user journey can lead to more visits, and consumers purchasing your products. 
          </MDBCardText>
          <MDBBtn href="/blog" color="primary" size="md">
            Find out How
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="text-align:center">
        <MDBCardImage src={require("../../assets/img/girl-typing.jpg")} alt="Women typing on laptop" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle  tag="h5">Typing</MDBCardTitle>
          <MDBCardText>
           How can you keep your manicure cute and still type over 100 wpm? 
          </MDBCardText>
          <MDBBtn href="/blog" color="primary" size="md">
            Find out More
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={require("../../assets/img/women-tech.jpg")} alt= "Women with laptop" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Tech News</MDBCardTitle>
          <MDBCardText>
          Angular, Vue, React, Python... What's the latest programming language you should learn, and why? 
          </MDBCardText>
          <MDBBtn  href="/blog" color="primary" size="md">
            Read More
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>

      
    </main>

    )
}

export default HomePage;