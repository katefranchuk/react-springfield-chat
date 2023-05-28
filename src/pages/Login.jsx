import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = useAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen pt-12 bg-base-200">
      <div className="containerWrap flex justify-center px-2">
        <AuthForm isLoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
