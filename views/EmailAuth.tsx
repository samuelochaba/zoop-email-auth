import OtpInput from "react-otp-input";
import Modal from "react-modal";
import Image from "next/image";
import React from "react";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "10px !important",
    border: "none",
  },
};

const EmailAuth = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [formState, setFormState] = React.useState({
    otp: "",
    error: false,
    message: "",
  });

  const { error, otp, message } = formState;

  const handleChange = (otp: string) => {
    setFormState({
      ...formState,
      otp,
    });
  };

  const verifyOTP = (otp: string) => {
    if (otp !== "123456") {
      setFormState({
        ...formState,
        error: true,
        message: "Incorrect OTP!",
      });
    } else {
      setFormState({
        ...formState,
        error: false,
        message: "",
      });
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main className="email_auth_container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Cancel"
        style={{
          ...customModalStyles,
          overlay: {
            backgroundColor: "rgba(94, 92, 92, 0.67)",
          },
        }}
      >
        <div className="email_auth_modal_content">
          <p>Sure you want to cancel the transaction?</p>
          <div className="email_auth_modal-btn-wrapper">
            <button onClick={closeModal} className=" yes-btn">
              Yes
            </button>
            <button onClick={closeModal} className=" no-btn">
              No
            </button>
          </div>
        </div>
      </Modal>
      <section className="email_auth_header_section">
        <Image
          src="/images/dark-logo.svg"
          width={175}
          height={23}
          alt="zoopsign logo"
        />
        <h2 className="email_auth_headeing-text">E-Sign Authentication</h2>
        <p className="email_auth_transaction-text">
          Transaction ID VTL001:19042022024125000107:3214
        </p>
      </section>
      <div className="email_auth_OTP_container">
        <h2>Enter OTP</h2>

        {error && <span className="email_auth_error">{message}</span>}

        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          containerStyle="otp-inputs-container-styles"
          inputStyle="email-auth-otp-inputs-styles"
          errorStyle="email_auth_input-error"
          hasErrored={error}
          isInputNum={true}
        />
      </div>
      <section className="email_auth_actions_section">
        <div className="buttons-wrapper">
          <button
            onClick={() => verifyOTP(otp)}
            className={`btn ${
              otp.length === 6
                ? "email_auth_verify-btn-active"
                : "email_auth_verify-btn"
            }`}
            disabled={otp.length < 6}
          >
            Verify
          </button>
          <button className="btn email_auth_resend_btn">Resend OTP</button>
        </div>

        <p onClick={openModal}>Cancel Transaction</p>
      </section>
      <footer>
        <p className="email_auth_footer-text">
          This electronic document is being eSigned as per the second schedule
          of the IT Act 2008 & eSign guidelines of the CCA, Govt of India ASP
          Name: Quagga Tech Pvt Ltd.
        </p>
        <p className="email_auth_footer_time">
          Current Time : 19/04/2022 14:41:33
        </p>
        <div className="email_auth_secured_section">
          <span>Secured by</span>
          <Image
            src="/images/light-logo.svg"
            width={130}
            height={14}
            alt="zoopsign logo"
          />
        </div>
      </footer>
    </main>
  );
};

export default EmailAuth;
