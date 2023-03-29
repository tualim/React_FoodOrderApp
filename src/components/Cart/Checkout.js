import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isNotPostal = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    address: true,
    city: true,
    postal: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const addressIsValid = !isEmpty(enteredAddress);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = !isNotPostal(enteredPostal);

    setFormInputValid({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    const formIsValid =
      nameIsValid && addressIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        address: enteredAddress,
        city: enteredCity,
        postal: enteredPostal,
    })
  };

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const nameControlClasses = `${styles.control} ${
    formInputValid.name ? "" : styles.invalid
  }`;

  const addressControlClasss = `${styles.control} ${
    formInputValid.address ? "" : styles.invalid
  }`;

  const cityControlClasss = `${styles.control} ${
    formInputValid.city ? "" : styles.invalid
  }`;

  const postalControlClasss = `${styles.control} ${
    formInputValid.postal ? "" : styles.invalid
  }`;

  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Enter Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && <p>Enter Valid name</p>}
      </div>
      <div className={addressControlClasss}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValid.address && <p>Enter Valid address</p>}
      </div>
      <div className={cityControlClasss}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValid.city && <p>Enter Valid city</p>}
      </div>
      <div className={postalControlClasss}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValid.postal && <p>Enter Valid Postal</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Submit</button>
      </div>
    </form>
  );
};

export default Checkout;
