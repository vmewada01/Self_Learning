import axios from "axios";

export function getTodos() {
  return axios.get("http://localhost:8080/posts");
}

export function DeleteTodos({ id }) {
  return axios({
    url: `http://localhost:8080/posts/${id}`,
    method: "DELETE",
  });
}

export function POST_TODO({ title, status }) {
  return axios({
    url: "http://localhost:8080/posts/",
    method: "POST",
    data: {
      title,
      status,
    },
  });
}

export function UPDATE_TODO({ id,newStatus }) {
  return axios({
    url: `http://localhost:8080/posts/${id}`,
    method: "PATCH",
    data: {
      status: newStatus,
    },
  });
}
