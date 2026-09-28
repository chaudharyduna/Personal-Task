import React from 'react'

const FilterBar = ({
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  remainingCount,
  completedCount,
  clearCompleted,
}) => {
  const statuses = [
    'All',
    'Active',
    'Completed',
  ]

  const categories = [
    'All',
    'Work',
    'Personal',
    'Urgent',
  ]

  return (
    <section className="filter-card">

      <div className="filter-left">

        <span className="filter-label">
          Filter
        </span>

        <div className="status-buttons">

          {statuses.map((status) => (
            <button
              key={status}
              type="button"
              className={
                statusFilter === status
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
              onClick={() =>
                setStatusFilter(status)
              }
            >
              {status}
            </button>
          ))}

        </div>

        <select
          className="category-select"
          value={categoryFilter}
          onChange={(event) =>
            setCategoryFilter(event.target.value)
          }
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category === 'All'
                ? 'All Categories'
                : category}
            </option>
          ))}
        </select>

      </div>

      <div className="filter-right">

        <div className="task-count">

          <strong className="remaining-count">
            {remainingCount}
          </strong>

          <span>
            remaining
          </span>

          <span className="count-divider">
            •
          </span>

          <strong className="completed-count">
            {completedCount}
          </strong>

          <span>
            completed
          </span>

        </div>

        {completedCount > 0 && (
          <button
            type="button"
            className="clear-btn"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        )}

      </div>

    </section>
  )
}

export default FilterBar