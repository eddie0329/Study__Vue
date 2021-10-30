import todosStore, {getDefaultState} from "../../src/store/modules/todos.store";
import todoServices from '../../src/services/todos.services';

const { getTodos } = todoServices;
jest.mock('getTodos');

// const { state, getters, mutations, actions } = todosStore;
const { state, mutations, actions } = todosStore;

describe('state', () => {
  it('default state must contain follows: getDefaultState', () => {
    expect(state).toMatchObject(getDefaultState());
  })
});

describe('mutations', () => {
  const { SET_TODOS } = mutations;

  let mockState;

  beforeEach(() => {
    mockState = getDefaultState();
  });

  it('SET_TODOS', () => {
    const payload = ["hello1"];
    SET_TODOS(mockState, payload);
    expect(mockState.todos).toEqual(payload);
  })
});

describe('actions', () => {
  const { fetchTodos } = actions;

  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it('fetchTodos', () => {
    console.log(getTodos);

    const mockData = ["hello", "hello2"];
    fetchTodos({ commit });
    expect(commit).toHaveBeenCalledWith(mockData);
  })
})

