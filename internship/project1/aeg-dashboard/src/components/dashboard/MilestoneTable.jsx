import { milestones } from "../../data/dashboardData";

export default function MilestoneTable() {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Project</th><th>Milestone</th><th>Description</th>
            <th>Start Date</th><th>End Date</th><th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((row, i) => (
            <tr key={i}>
              <td className="project-cell">{row.project}</td>
              <td>{row.milestone}</td>
              <td>{row.desc}</td>
              <td>{row.start}</td>
              <td>{row.end}</td>
              <td className="overdue">{row.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}