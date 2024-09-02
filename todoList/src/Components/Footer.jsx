import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer id="sticky-footer" className="foot py-3  text-white text-center ">
      <p>Samyak Dahat | Copyright @{currentYear} </p>
    </footer>
  )
}

export default Footer
