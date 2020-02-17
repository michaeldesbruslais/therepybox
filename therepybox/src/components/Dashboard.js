import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-comp generic-comp">
      <div className="bg"></div>
      <div>Image</div>
      <h2>Good day Michael</h2>
      <div className="module-container">
        <div className="module-weather module-generic">
          <div className="module-header">Weather</div>
        </div>
        <div className="module-news module-generic">
          <div className="module-header">News</div>
        </div>
        <div className="module-sport module-generic">
          <div className="module-header">Sport</div>
        </div>
        <div className="module-photos module-generic">
          <div className="module-header">Photos</div>
        </div>
        <div className="module-tasks module-generic">
          <div className="module-header">Tasks</div>
        </div>
        <div className="module-clothes module-generic">
          <div className="module-header">Clothes</div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard