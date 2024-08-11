import Profile from "../../components/Profile";

export default function Users({ type }) {
  return (
    <div className="user-container w-full h-full flex flex-col items-center p-6">
      <Profile type={type} />
    </div>
  );
}
