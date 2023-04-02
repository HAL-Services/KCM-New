import React, { useEffect, useState } from "react";
import "../styles/GetAQuote.scss";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
const GetAQuote = ({ close, click }) => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [carModel, setModel] = useState(null)
  const [year, setYear] = useState(null)
  const [type, setType] = useState(null)
  const [loading, setLoading] = useState(false)
  function handleSuccess() {
    toast.success("We will contact you shortly.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleError(msg) {
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    if (name === null || email === null || mobile === null || carModel === null || year === null || type === null) {
      handleError("Please complete the form")
      return;
    }
    try {
      const data = { name, email, mobile, carModel, year, type }
      await axios.post(`${process.env.REACT_APP_GETQUOTE_ROUTE}`, data)
      e.target.reset()
      setLoading(false)
      click()
      handleSuccess()
    } catch (error) {
      setLoading(false)
      click()
      handleError("Please Try Again Later")
    }

  }
  useEffect(() => {
    if (close) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [close]);

  return (<>
    {
      loading ? <CircularProgress /> :

        <div className="quote">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="quote_box">
            <span className="quote_close" onClick={() => close(false)}>
              <IoCloseSharp className="quote_close_icon" />
            </span>
            <h2>Get A Quote</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="resize_mobile">
                <div className="input-container">
                  <input
                    type="text"
                    name="fullName"
                    required={true}
                    autoComplete="on"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="form-input-fullName">Full Name</label>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    required={true}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="form-input-Email">Email</label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phoneNumber"
                  required={true}
                  pattern="[6789][0-9]{9}"
                  autoComplete="on"
                  maxLength={10}
                  minLength={10}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <label htmlFor="form-input-phoneNumber">Phone Number</label>
              </div>


              <div className="input-container">
                <input
                  type="text"
                  name="model"
                  required={true}
                  onChange={(e) => setModel(e.target.value)}
                />
                <label htmlFor="form-input-model">Model</label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="manufacturing"
                  required={true}
                  onChange={(e) => setYear(e.target.value)}
                />
                <label htmlFor="form-input-manufacturing">Manufacturing Year</label>
              </div>
              <div className="input-container">
                <select required={true} onChange={(e) => setType(e.target.value)}>
                  <option hidden></option >
                  <option value="diesel">Diesel</option>
                  <option value="petrol">Petrol</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                <label htmlFor="form-input-manufacturing">Engine Type</label>
              </div>
              <div className="button_container">
                <button>Sumbit</button>
              </div>
            </form>
          </div>
        </div>
    }
  </>
  );
};

export default GetAQuote;
