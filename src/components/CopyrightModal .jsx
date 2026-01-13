import React from "react";
import './CopyrightModal.css'
import Button from "./Button";

const CopyrightModal = ({ show, onAccept, onReject }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <p className="mb-0">
                <strong className="me-2">Attention :</strong>Copyright Notice</p>
              </div>
            </div>

            {/* Body */}
            <div className="modal-body px-4 pb-4">
              <p>
                All the content (including but not limited to design, images,
                text, information, etc.) on this platform is copyrighted
                material that is owned by Vyzrd Pty Ltd (“Vyzrd”).
                <br /><br />

                Copying any copyrighted material from this platform without
                obtaining prior written consent from Vyzrd is prohibited and
                may result in legal action being taken against you.
                <br /><br />

                <strong>
                  Vyzrd takes copyright infringement very seriously and will
                  actively pursue legal action against any party found to be
                  in violation of our intellectual property rights.
                </strong>
                <br /><br />

                By continuing to use the platform, you agree to comply with
                our copyright policies.
                <br /><br />

                For questions, contact <strong>contact@vyzrd.com</strong>
                <br /><br />

                <strong>Vyzrd Pty Ltd</strong>
              </p>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-3">
                <Button onClick={onReject} text='Reject' className="text-dark" />
                <Button onClick={onAccept} text='Accept' className="text-dark" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default CopyrightModal;
