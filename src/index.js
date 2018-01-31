import React from 'react';
import { render } from 'react-dom';
//CSS
//JS
import { sampleText } from './sampleText';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                <div className="col-sm-6">
                <textarea value={sampleText} rows="35" className="form-control">

                </textarea>
                </div>

                <div className="col-sm-6">
                    {sampleText}
                </div>

                </div>
            </div>
        )
    }
}

render(
<App />, document.getElementById('root')
);