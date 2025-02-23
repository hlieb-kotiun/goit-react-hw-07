import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const telefonId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  // const handleSubmit = (values, actions) => {
  //   addUser({
  //     id: nanoid(),
  //     name: values.name,
  //     number: values.number,
  //   });
  //   actions.resetForm();
  // };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapper}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={s.searchInput}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.wrapper}>
          <label htmlFor={telefonId}>Number</label>
          <Field
            className={s.searchInput}
            type="tel"
            name="number"
            id={telefonId}
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
