/**
 *  Default State of Filters
 */
const initialFilterState = {
  limit: 10,
  offset: 0,
  search: "",
  labels: [],
  priority: null,
  status: null,
  sortKey: "CREATED_AT__DESC",
  after_due_date: null,
  before_due_date: null,
  after_created_at: null,
  before_created_at: null,
};

export default initialFilterState;
