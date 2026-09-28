import React from 'react'

const Header = ({
  totalTasks,
  completedTasks,
  darkMode,
  toggleDarkMode,
}) => {
  const completionPercentage =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0

  return (
    <header className="header-card">
      <div className="header-content">

        <div className="header-left">

          <div className="brand-icon">
            ✓
          </div>

          <div>
            <h1>TaskFlow</h1>

            <p>
              Organize your tasks. Stay focused.
              Get things done.
            </p>
          </div>

        </div>

        <div className="header-actions">

          <div className="progress-section">

            <div className="progress-info">
              <span>Daily Progress</span>

              <strong>
                {completionPercentage}%
              </strong>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${completionPercentage}%`,
                }}
              />
            </div>

            <small>
              {completedTasks} of {totalTasks} completed
            </small>

          </div>

          <button
            className="theme-button"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Header