import React,{useEffect} from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
   useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);
  return (
    <MDBContainer className="py-5">
      {/*  <h2 classNameName="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>  */}
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
         <h1 className="text-3xl font-bold text-center mb-4 my-7  wow animate__animated animate__fadeInUp">Testimonial</h1>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0  wow animate__animated animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong  wow animate__animated animate__fadeInUp"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3  wow animate__animated animate__fadeInUp" >Maria Smantha</h5>
          <h6 className="text-primary mb-3  wow animate__animated animate__fadeInUp">Web Developer</h6>
          <p className="px-xl-3  wow animate__animated animate__fadeInUp">
            <MDBIcon fas icon="quote-left" className="pe-2  wow animate__animated animate__fadeInUp" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong  wow animate__animated animate__fadeInUp"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3  wow animate__animated animate__fadeInUp">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3  wow animate__animated animate__fadeInUp">Graphic Designer</h6>
          <p className="px-xl-3  wow animate__animated animate__fadeInUp">
            <MDBIcon fas icon="quote-left" className="pe-2  wow animate__animated animate__fadeInUp" />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong  wow animate__animated animate__fadeInUp"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3  wow animate__animated animate__fadeInUp">John Smith</h5>
          <h6 className="text-primary mb-3  wow animate__animated animate__fadeInUp">Marketing Specialist</h6>
          <p className="px-xl-3  wow animate__animated animate__fadeInUp">
            <MDBIcon fas icon="quote-left" className="pe-2  wow animate__animated animate__fadeInUp" />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}