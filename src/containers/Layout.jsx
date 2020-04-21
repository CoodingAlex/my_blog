import React from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Layout(props) {
  return (
    <React.Fragment>
      <Nav />
      {props.children}
      <Footer />
    </React.Fragment>

  )
}
export default Layout;