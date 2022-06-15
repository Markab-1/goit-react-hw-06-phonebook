/* eslint-disable import/no-anonymous-default-export */
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addData = createAction('Add', value => ({
  payload: {
    id: nanoid(),
    name: value.name,
    number: value.number,
  },
}));

const deleteData = createAction('Delete');

const changeFilter = createAction('ChangeFilter');

export default { addData, deleteData, changeFilter };
