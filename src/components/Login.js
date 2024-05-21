import { useFormik } from "formik";
import { Container } from 'react-bootstrap';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            onLogin(values);
            formik.resetForm();
            navigate('/dashboard');
        }
    });

    return (
        <>
            <Container>
                <form className="login" onSubmit={formik.handleSubmit}>
                    <h2 className="text-center mb-4">Log in</h2>
                    {/* Username input */}
                    <div className="mb-4">
                        <div className="form-outline">
                            <input required type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="username">Username</label>
                        </div>
                    </div>
                    {/* Password input */}
                    <div className="mb-4">
                        <div className="form-outline">
                            <input required type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="password">Password</label>
                        </div>
                    </div>
                    {/* Submit button */}
                    <div className="mb-4 text-center">
                        <button type="submit" className="btn btn-primary">LOG IN</button>
                    </div>
                    {/* Forgot password link */}
                    <div className="mb-4 text-center">
                        <a className="forgot-password" href="/forgot">Forgot Password?</a>
                    </div>
                </form>
            </Container>
            <Footer />
        </>
    );
}
