export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">ComplaintFlow</h2>
      <ul>
        <li className="active">Dashboard</li>
        <li>Submit Complaint</li>
        <li>My Complaints</li>
        <li>Notifications</li>
        <li>Profile</li>
        <li>Settings</li>
        <li className="logout">Logout</li>
      </ul>
    </div>
  );
}