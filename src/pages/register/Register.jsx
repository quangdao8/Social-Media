import "./register.css";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yub from "yup";

const validationSchema = Yub.object({
    userName: Yub.string("Enter your user name").required("Username is required"),
    email: Yub.string("Enter your email address").email("Enter a valid email").required("Email is required"),
    password: Yub.string("Enter your password").min(8, "Password should be of minimum 8 characters length"),
    passwordConfirm: Yub.string().oneOf([Yub.ref("password"), null], "Passwords must match"),
});

export default function Register() {
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema: validationSchema,
    });
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">QD social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on QD social.</span>
                </div>
                <div className="loginRight">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="loginBox">
                            <input
                                placeholder="Username"
                                className="loginInput"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                name="userName"
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                                <div>{formik.errors.userName}</div>
                            ) : null}
                            <input
                                placeholder="Email"
                                className="loginInput"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                name="email"
                            />
                            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <input
                                placeholder="Password"
                                className="loginInput"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                name="password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                            <input
                                placeholder="Password Again"
                                className="loginInput"
                                value={formik.values.passwordConfirm}
                                onChange={formik.handleChange}
                                name="passwordConfirm"
                            />
                            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                                <div>{formik.errors.passwordConfirm}</div>
                            ) : null}
                            <button className="loginButton" type="submit">
                                Sign Up
                            </button>
                            <button className="loginRegisterButton">Log into Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
