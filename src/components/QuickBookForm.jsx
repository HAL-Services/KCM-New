import "../styles/QuickBookForm.styles.scss";
import axios from "axios";

export default function QuickBookForm() {
  // const sendMessage = async () => {
  //   axios
  //     .post("https://graph.facebook.com/v14.0/106491258870893/messages", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer EAAK8q6lmZAAUBACJYKmU53V6NjFaP4lPcbfL8xDWHeW8fD9dmcoQocRvirVE4KpUpSKtV9RV2VaTVTYOIR9gzUZAYQQkHvAea5c5LuoBfZCjFLY3ha5kfUZAAwroNOpO8OZCYssA3CNKEieRGsw9ZCSCMnl3PcXZCwm9WCfDza1ilu22nx02ZBAvGRL9sA4VNayD2rURn28ZACwZDZD",
  //       },
  //       body: {
  //         messaging_product: "whatsapp",
  //         to: "919990868464",
  //         type: "template",
  //         template: {
  //           name: "hello_world",
  //           language: {
  //             code: "en_US",
  //           },
  //         },
  //       },
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err.message));
  // };

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
