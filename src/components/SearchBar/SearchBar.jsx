import { Field, Form, Formik } from 'formik';

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={(values, actions) => {
          onSearch(values.searchQuery);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            <Field
              type="text"
              name="searchQuery"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </label>
        </Form>
      </Formik>
    </header>
  );
}
