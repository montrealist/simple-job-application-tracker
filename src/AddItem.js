import React, { useState } from 'react';

export default function AddItem(props) {
    const [state, setState] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

    };

    const onClear = (e) => {
        e.preventDefault();
        console.log('clear');
    };

    return (<div className="f3 list pl0 mt0 measure-wide-ns center">
        <form className="pa4 black-80">
            <div className="measure">
                <label htmlFor="company" className="f6 b db mb2">Company</label>
                <input id="company" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
            </div>
            <div className="measure">
                <label htmlFor="position" className="f6 b db mb2">Position</label>
                <input id="position" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
            </div>
            <div className="measure">
                <label htmlFor="notes" className="f6 b db mb2">Notes <span className="normal black-60">(optional)</span></label>
                <textarea id="notes" name="notes" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                <small id="name-desc" className="f6 black-60 db mb2">Any relevant notes about the company or the process.</small>
            </div>
            <div className="measure tr">
                <a onClick={onSubmit} className="f4 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib dark-green" href="/submit">Submit</a>
                <a onClick={onClear} className="f4 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib mid-gray" href="/clear">Clear</a>
            </div>

        </form>
    </div>
    );
};