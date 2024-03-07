import css from './SearchBar.module.css';

import { Field, Form, Formik } from 'formik';
import { IoSearch } from 'react-icons/io5';
import toast from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={(values, actions) => {
          if (values.searchQuery.trim() === '') {
            return toast.error('You need to enter text to find pictures 🔍');
          }

          onSearch(values.searchQuery);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            <Field
              className={css.input}
              type="text"
              name="searchQuery"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
              <IoSearch />
            </button>
          </label>
        </Form>
      </Formik>
    </header>
  );
}
