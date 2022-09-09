import "../styles/QuickBookForm.styles.scss";

export default function QuickBookForm() {
  return (
    <div className="quickBook-container">
      <form action="" method="post">
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-fullName">Full Name</label>
        </div>
        <div className="input-container">
          <input type="text" name="mobile" required={true} autoComplete="off" />
          <label htmlFor="form-input-fullName">Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-carNumber">Car Model</label>
        </div>
        <div className="quickBook-btn-container">
          <button type="submit" /*>onClick={() => sendMessage()}*/>
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
