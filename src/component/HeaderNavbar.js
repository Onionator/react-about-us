import React from 'react'
import astroDude from '../public/astroDude.jpg'


export default function HeaderNavbar() {
  var logoStyle = {
    width: '80px',
    height: '80px',
    position: 'relative',
    margin: '0 auto 0 auto',
    }
  var navStyles = {
    backgroundColor: '#F7F7F7',
    fontSize: '24px',
    border: "1px solid lightgrey"
  }
  var aStyles = {
    fontStyle: 'Sans-Serif',
    textDecoration: 'none',
    paddingLeft: '25px',
    position: 'relative',
    margin: '0 auto 0 auto',
  }
  var signStyles = {
    padding: '20px',
    fontStyle: 'Sans-Serif',
    textDecoration: 'none',
    position: 'relative',
    margin: '0 auto 0 auto',
    float: 'right',
  }
  return (
    <div style={navStyles}>
    <nav>
    <a href='/'><img alt='astro dude' src={astroDude} style={logoStyle}/></a>
    <a style={aStyles} href='/'>Home</a>
    <a style={aStyles} href='/'>Our Vision</a>

    <a style={signStyles} href='/'>Sign Up/In</a>

    </nav>
    </div>
  );
}
