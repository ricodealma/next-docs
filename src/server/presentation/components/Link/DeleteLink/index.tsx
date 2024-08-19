'use client';
import React from 'react';
import { useActionState } from 'react';
import { deleteLink } from './actions';

const initialState = {
    error: {
        id: []
    },
    success: null,
    data: null
};

const DeleteLink = () => {
    const [state, formAction] = useActionState(deleteLink, initialState);

    if (state?.success) {
        alert(JSON.stringify(state?.data));
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
            <button type="submit">Delete</button>
        </form>
    );
};

export default DeleteLink;
