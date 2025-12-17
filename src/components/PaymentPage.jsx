import "../components/styles/globals.css";
import QR from "../images/qr.jpeg";
const PaymentPage = () => {
  return (
    <section className="payment-wrapper">
      <div className="payment-card">

        <h2>Complete Your Payment</h2>

        {/* QR CODE */}
        <img
          src={QR}
          alt="Payment QR"
          className="qr-img"
        />

        <p className="hint">Scan the QR code to pay</p>

        <hr />

        {/* BANK DETAILS */}
        <div className="bank-details">
          <p><strong>Holder Name:</strong> J Jagadeesh</p>
          <p><strong>Account Number:</strong> 4879 0100 0000 0229</p>
          <p><strong>IFSC:</strong> KVBL0004879</p>
          <p><strong>Phone Pay & Google Pay:</strong> 8885727716 / 6303511233</p>
        </div>

        <small className="note">
          After payment, our team will contact you for confirmation.
        </small>

      </div>
    </section>
  );
};

export default PaymentPage;
