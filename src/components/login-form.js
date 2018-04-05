import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import './login-form.css';

import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

var inputStyle = {
    padding: '15px'
  };

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    placeholder="Demo Username: jnichols"
                    style={inputStyle}
                    className="input-field"
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    placeholder="Demo Password: 1234567890"
                    className="input-field"
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                    Log In
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);