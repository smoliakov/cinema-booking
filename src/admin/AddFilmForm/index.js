import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';

class AddFilmForm extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>Date</label>
                </div>
                <Field
                  name="date"
                  component="input"
                  type="date"
                />
              </div>
              <div>
                <div>
                  <label>Title</label>
                </div>
                <Field
                  name="title"
                  component="input"
                  type="text"
                />
              </div>

              <div>
                <div>
                  <label>description</label>
                </div>
                <Field
                  name="description"
                  component="input"
                  type="text"
                />
              </div>

              <div>
                <div>
                  <label>duration</label>
                </div>
                <Field
                  name="duration"
                  component="input"
                  type="text"
                />
              </div>

              <div>
                <div>
                  <label>genre</label>
                </div>
                <Field
                  name="genre"
                  component="input"
                  type="text"
                />
              </div>

              <div>
                <div>
                  <label>image</label>
                </div>
                <Field
                  name="image"
                  component="input"
                  type="text"
                />
              </div>
              <div>
                <div>
                  <label>link</label>
                </div>
                <Field
                  name="link"
                  component="input"
                  type="text"
                />
              </div>

              <div>
                <div>
                  <label>year</label>
                </div>
                <Field
                  name="year"
                  component="input"
                  type="text"
                />
              </div>

              <button type="submit" disabled={submitting || pristine}>
                Save
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

AddFilmForm.propTypes = {};
AddFilmForm.defaultProps = {};

export default AddFilmForm;

/*
date: "30.11.2018"
: "Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной."
: "2:10"
: "Фантастика"
id: "Bif6hZwtoggzn3xH0e9t"
: "https://cdn.igromania.ru/mnt/articles/5/f/f/4/f/b/29015/preview/0cfd1fb55b20de5a_848xH.jpg"
: "https://www.kinopoisk.ru/film/dvukhsotletniy-chelovek-1999-7640"
title: "Стражи Галактики"
: "2017"
 */