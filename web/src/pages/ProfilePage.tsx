import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
const ProfilePage = () => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  const navigate = useNavigate();
  return (
    <div>
      <div>{JSON.stringify(profile)}</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
