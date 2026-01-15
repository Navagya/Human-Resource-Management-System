function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Salary: {user.salary}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Profile;
