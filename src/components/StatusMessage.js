//washed-red

import React from 'react';

export default function StatusMessage({ msg, error }) {
    return (
        <div>
        {msg && 
            <div className={ "flex f4 mv3 items-center justify-center pa2 navy " + (error ? "bg-washed-red" : "bg-lightest-blue")}>
                {!error &&
                    <svg className="w1" data-icon="info" viewBox="0 0 32 32">
                        <title>info icon</title>
                        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
                    </svg>
                }
                <span className="lh-title ml3">{msg}</span>
            </div>
        }
        {!msg && 
            <div className={ "flex f4 mv3 items-center justify-center pa2 navy bg-light-yellow" }>
                <span className="lh-title ml3">Oops, no message to display.</span>
            </div>
        }
        </div>
    );
}