import React from 'react'
import './Footer.css'

function footer() {
  return (
    <>
    <div class="footer dm-footer d-flex flex-lg-column" id="kt_footer">
      <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div class="dm-text-footer order-2 order-md-1">
              <span>Copyright 2026 <strong>Vyzrd</strong>. All rights reserved </span>
              <span><a href="technicalSupport.php" target="_blank">Technical Support</a></span>
              <span><a href="#!" data-toggle="modal" data-target="#termsuseModal">Terms of Use</a></span>
              <span><a href="#!" data-toggle="modal" data-target="#privapolicModal">Privacy Policy</a></span>
          </div>
      </div>
  </div>
    </>
  )
}

export default footer