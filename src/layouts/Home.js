import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const CTALink = styled(Link)`
  &:hover i {
    padding-left: 20px;
  }
  & i {
    padding-left: 5px;
    transition: all 0.5s ease;
  }
  background-color: #bf215b;
  border-color: #bf215b;
`

const Stats = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 col-lg-3 mb-5">
        <div className="card z-1 lift">
          <h2
            className="page-header-title"
            style={{ color: '#e81500', textAlign: 'center' }}
          >
            7
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos confirmados</h6>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <div className="card z-1 lift">
          <h2
            className="page-header-title"
            style={{ color: '#f4a100', textAlign: 'center' }}
          >
            17
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos sospechosos</h6>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <div className="card z-1 lift">
          <h2
            className="page-header-title"
            style={{ color: '#00ac69', textAlign: 'center' }}
          >
            6
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos descartados</h6>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <div className="card z-1 lift">
          <h2
            className="page-header-title"
            style={{ color: 'black', textAlign: 'center' }}
          >
            125
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">En vigilancia</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

// const Home = () => {
//   return (
//     <div>
//       <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
//         <div className="page-header-content">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6" data-aos="fade-up">
//                 <h1 className="page-header-title">
//                   Auto Reporte de Coronavirus en Paraguay
//                 </h1>
//                 <p className="page-header-text">
//                   El DGVS-MSPyBS está vigilando de cerca los brotes de la
//                   enfermedad respiratoria causadas por el COVID-19.
//                 </p>
//                 <p className="page-header-text mb-5">
//                   Si sospecha que está infectado por el virus que causa el
//                   COVID-19, por favor notifique al DGVS clickando en el botón de
//                   autoreporte.
//                 </p>
//                 <Link
//                   className="btn btn-teal btn-marketing rounded-pill lift lift-sm"
//                   to="/report"
//                 >
//                   Reportar<i className="fas fa-arrow-right ml-1"></i>
//                 </Link>
//               </div>
//               <div
//                 className="col-lg-6 d-none d-lg-block"
//                 data-aos="fade-up"
//                 data-aos-delay="50"
//               >
//                 <img
//                   className="img-fluid"
//                   src="assets/img/drawkit/color/drawkit-content-man-color.svg"
//                   alt="Person filling out form"
//                 />
//               </div>
//             </div>
//             <Stats />
//           </div>
//         </div>
//         <div className="svg-border-rounded text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 144.54 17.34"
//             preserveAspectRatio="none"
//             fill="currentColor"
//           >
//             <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
//           </svg>
//         </div>
//       </header>

//       <section className="bg-white py-10">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-lg-4 mb-5 mb-lg-0">
//               <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
//                 <i data-feather="layers"></i>
//               </div>

//               <h3>Pasos para prevenir la enfermedad</h3>
//               <p className="mb-0">
//                 La mejor forma de prevenir la enfermedad es evitar ser expuesto
//                 al COVID-19.
//               </p>
//             </div>
//             <div className="col-lg-4 mb-5 mb-lg-0">
//               <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
//                 <i data-feather="smartphone"></i>
//               </div>
//               <h3>Qué hacer si estás enfermo</h3>
//               <p className="mb-0">
//                 Si está enfermo con COVID-19 o sospecha que está infectado, tome
//                 medidas para ayudar a prevenir la propagación de la enfermedad.
//               </p>
//             </div>
//             <div className="col-lg-4">
//               <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
//                 <i data-feather="code"></i>
//               </div>
//               <h3>
//                 Mantenga el trabajo, las escuelas y las comunidades seguras
//               </h3>
//               <p className="mb-0">
//                 Protéjase a sí mismo y a su comunidad de contraer y difundir
//                 COVID-19.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="m-0" />
//     </div>
//   )
// }

const Home = () => {
  return (
    <section className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <h2>Auto Reporte de Coronavirus en Paraguay</h2>
            <p className="lead">
              El DGVS-MSPyBS está vigilando de cerca los brotes de la enfermedad
              respiratoria causadas por el COVID-19.
            </p>
            <p>
              Si sospecha que está infectado por el virus que causa el COVID-19,
              por favor notifique al DGVS clickando en el botón de autoreporte.
            </p>
            <p className="mt-4">
              <CTALink className="btn btn-secondary" to="/report">
                Reportar<i className="fas fa-arrow-right ml-1"></i>
              </CTALink>
            </p>

            {/* <div className="row pt-4 pt-xl-5">
              <div className="col-12 col-md-5">
                <h4>
                  <strong>Feature One</strong>
                </h4>
                <p>A small river named Duden flows</p>
              </div>
              <div className="col-12 col-md-5 m-auto pt-3 pt-md-0">
                <h4>
                  <strong>Feature Two</strong>
                </h4>
                <p>Separated they live in Bookmarksgrove</p>
              </div>
            </div> */}
          </div>
          <div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
            <img alt="image" className="img-fluid" src="/img/hero.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
