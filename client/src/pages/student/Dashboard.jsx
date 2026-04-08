export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome">
        <h1>Hello, John Doe!</h1>
        <p>How can we help you today?</p>
        <button>+ New Complaint</button>
      </div>

      <div className="cards">
        <div className="card">
          <h2>12</h2>
          <p>Total Complaints</p>
        </div>
        <div className="card">
          <h2>3</h2>
          <p>Pending</p>
        </div>
        <div className="card">
          <h2>5</h2>
          <p>In Progress</p>
        </div>
        <div className="card">
          <h2>4</h2>
          <p>Resolved</p>
        </div>
      </div>

      <div className="table">
        <h3>Recent Complaints</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CMP-001</td>
              <td>Internet connectivity issue</td>
              <td>IT</td>
              <td>In Progress</td>
              <td>High</td>
              <td>2026-03-28</td>
            </tr>
            <tr>
              <td>CMP-002</td>
              <td>AC not working</td>
              <td>Maintenance</td>
              <td>Pending</td>
              <td>Medium</td>
              <td>2026-03-27</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// #REACT--------------=r̥