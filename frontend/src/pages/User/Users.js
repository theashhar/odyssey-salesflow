import Profile from "../../components/User/Profile";

export default function Users({ type }) {
  return (
    <div className="user-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      <Profile type={type} />
    </div>
  );
}
