'use client';
import React from 'react';
import { useActionState } from 'react';
import { updateLink } from './actions';

const initialState = {
    error: {
        uri: [],
        id: []
    },
    success: null,
    data: null
};

const UpdateLink = () => {
    const [state, formAction] = useActionState(updateLink, initialState);

    if (state?.success) {
        alert(JSON.stringify(state?.data));
    }

    return (
        <form id="linkForm" action={formAction}>
            <label>
                Link
                <input required type="text" name="uri" />
                {Array.isArray(state?.error?.uri) && state.error.uri[0] && (
                    <p aria-live="polite" style={{ color: 'red' }}>
                        {state.error.uri[0]}
                    </p>
                )}
            </label>
            <br />
            <label>
                Id
                <input required type="number" name="id" />
                {Array.isArray(state?.error?.id) && state.error.id[0] && (
                    <p aria-live="polite" style={{ color: 'red' }}>
                        {state.error.id[0]}
                    </p>
                )}
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UpdateLink;
