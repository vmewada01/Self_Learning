export const gitHubLoadingAction = { type: "FETCH_GITHUB_USER_SUCCESS" };
export const gitHubSucessAction = { type: "FETCH_GITHUB_USER_SUCCESS" };
export const gitHubFailureAction = { type: "FETCH_GITHUB_USER_SUCCESS" };

export const fetchUser = (dispatch, query) => {
  dispatch(gitHubLoadingAction);
  fetch("https://api.github.com/search/users?q=vishal")
    .then((res) => res.json())
    .then((res) => {
        console.log(res.items)
     dispatch({ ...gitHubSucessAction, payload: res.items });
    })
    .catch((err) => {
      dispatch(gitHubFailureAction)
    });
};
