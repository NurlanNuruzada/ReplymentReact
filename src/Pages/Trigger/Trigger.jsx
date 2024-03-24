import React, { useState } from 'react'
import Styles from './Trigger.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Select } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { GetAllDomains } from "../../Services/DomainService";

export default function Trigger() {
  const [statusText, setStatusText] = useState();
  const [statusType, setStatusType] = useState();
  const [warringStyle, setWarringStyle] = useState(null);
  const [errorStyle, setErrorStyle] = useState(null);
  const [succesStyle, setSuccesStyle] = useState(null);
  const queryClient = useQueryClient();



  const notifyCarCreatedSuccess = () => {
    toast.success(`New Trigger Created successfully!`, {
    });
  };
  const notifyError = () => toast.error("Error Created Blog.");
  const notify = () => toast("Wow so easy!");

  const triggerFormik = useFormik({
    initialValues: {
      StatusText: statusText ? statusText : '',
      TriggerStatusType: statusType,
    },
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('StatusText', statusText ? statusText : '');
      formData.append("TriggerStatusType", statusType ? statusType : '');

      try {
        const response = await axios.post('https://localhost:7091/api/Triggers', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        if (response.status === 201) {
          notifyCarCreatedSuccess();
          setWarringStyle(null);
          setErrorStyle(null);
          setSuccesStyle(null);
          setStatusText(null);
          // queryClient.invalidateQueries('GetAllDomains');
        } else {
          notifyError();
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    },
  });
  const warringType = (typeId) => {
    setStatusType(typeId);
    setWarringStyle('rgba(255, 170, 0, 1)');
    setErrorStyle(null);
    setSuccesStyle(null);
  }

  const errorType = (typeId) => {
    setStatusType(typeId);
    setErrorStyle('rgba(255, 103, 103, 1)');
    setWarringStyle(null);
    setSuccesStyle(null);
  }

  const succesType = (typeId) => {
    setStatusType(typeId);
    setSuccesStyle('rgba(0, 214, 143, 1)');
    setWarringStyle(null);
    setErrorStyle(null);
  }

  const handleStatusText = (event) => {
    setStatusText(event.target.value);
  };

  return (
    <div className={Styles.MainContainer}>
      <ToastContainer />
      <div className={Styles.TriggerTitle}>
        <h1>Trigger</h1>
        <button className={Styles.Tdomain}>
          <span>replyment.com</span>
          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0827 1.16667L5.49935 5.75L0.916016 1.16667L1.72956 0.353125L5.49935 4.12292L9.26914 0.353125L10.0827 1.16667Z" fill="#1C1B1F" fill-opacity="0.5" />
          </svg>
        </button>
        <button className={Styles.active}>Active</button>
      </div>
      <div className={Styles.TrigerSetting}>
        <h2>Trigger settings</h2>
      </div>

      <div className={Styles.PaymentCurrently}>
        <div className={Styles.PaymentTetx}>
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 22V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H12.1C12.0333 2.33333 12 2.66667 12 3C12 3.33333 12.0333 3.66667 12.1 4H2V17.125L3.15 16H18V7.9C18.3833 7.81667 18.7417 7.70417 19.075 7.5625C19.4083 7.42083 19.7167 7.23333 20 7V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H4L0 22ZM17 6C16.1667 6 15.4583 5.70833 14.875 5.125C14.2917 4.54167 14 3.83333 14 3C14 2.16667 14.2917 1.45833 14.875 0.875C15.4583 0.291667 16.1667 0 17 0C17.8333 0 18.5417 0.291667 19.125 0.875C19.7083 1.45833 20 2.16667 20 3C20 3.83333 19.7083 4.54167 19.125 5.125C18.5417 5.70833 17.8333 6 17 6Z" fill="#1C1B1F" />
          </svg><span>Payment is currently inactive. We fix it!</span>
        </div>
        <div className={Styles.EditStatus}>
          <p>Edit status</p>
          <input
            value={statusText}
            onChange={handleStatusText}
            placeholder='Payment is currently inactive. We fix it!' />
        </div>
        <div className={Styles.StatusType}>
          <div className={Styles.StatusTypeIn}>
            <p>Status type</p>
            <div>
              <button onClick={() => warringType(0)} style={{ color: warringStyle ? 'white' : 'rgba(255, 170, 0, 1)', backgroundColor: warringStyle ? warringStyle : 'transparent', marginLeft: '0px', border: '1px solid rgba(255, 170, 0, 1)' }}>Warring</button>
              <button onClick={() => errorType(1)} style={{ color: errorStyle ? 'white' : 'rgba(255, 103, 103, 1)', backgroundColor: errorStyle ? errorStyle : 'transparent', border: '1px solid rgba(255, 103, 103, 1)' }}>Error</button>
              <button onClick={() => succesType(2)} style={{ color: succesStyle ? 'white' : 'rgba(0, 214, 143, 1)', backgroundColor: succesStyle ? succesStyle : 'transparent', border: '1px solid rgba(0, 214, 143, 1)' }}>Success</button>
            </div>
          </div>
          <div className={Styles.SaveButton}>
            <button style={{ border: '1px solid rgba(255, 103, 103, 1)', marginLeft: '0px' }}>
              <svg color='rgba(255, 103, 103, 1)' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.4 12L10 9.4L12.6 12L14 10.6L11.4 8L14 5.4L12.6 4L10 6.6L7.4 4L6 5.4L8.6 8L6 10.6L7.4 12ZM0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14Z" fill="#FF6767" />
              </svg>
              <span style={{ color: 'rgba(255, 103, 103, 1)' }}>Disactive</span>
            </button>
            <button onClick={() => triggerFormik.submitForm()} style={{ border: '1px solid rgba(203, 206, 210, 1)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1663_5751" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1663_5751)">
                  <path d="M9.55156 18L3.85156 12.3L5.27656 10.875L9.55156 15.15L18.7266 5.97498L20.1516 7.39998L9.55156 18Z" fill="#1C1B1F" />
                </g>
              </svg>
              <span>Save changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
