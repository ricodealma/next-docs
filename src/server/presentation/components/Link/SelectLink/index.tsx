'use client';
import React from 'react';
import { useActionState } from 'react';
import { selectLink } from './actions';

const initialState = {
  error: {
    id: []
  },
  success: null,
  data: null
};

const SelectLink = () => {
  const [state, formAction] = useActionState(selectLink, initialState);

  if (state?.success) {
    return (
      <div>
        <p>Link: {state.data.uri}</p>
        <p>Id: {state.data.id}</p>
      </div>
    );
  }

  return (
    <form id="linkForm" action={formAction}>
      <label>
        Id
        <input required type="text" name="id" />
        {Array.isArray(state?.error?.id) && state.error.id[0] && (
          <p aria-live="polite" style={{ color: 'red' }}>
            {state.error.id[0]}
          </p>
        )}
      </label>
      <br />
      <button type="submit">View</button>
    </form>
  );
};

export default SelectLink;
