import { ClientAPI } from "./ClientAPI";
const UserAPI = {
    getAll() {
        let url = `/users`;
        return ClientAPI.get(url);
    },
    getById(id) {
        let url = `/users/${id}`;
        return ClientAPI.get(url);
    },
    getByEmail(email) {
        let url = `/users?email=${email}`;
        return ClientAPI.get(url);
    },
    login(user) {
        let url = `/login`;
        return ClientAPI.post(url, user);
    },
    register(user) {
        let url = `/users`;
        return ClientAPI.post(url, user);
    },
    search(value) {
        let url = `/users?_p=${value}`;
        return ClientAPI.get(url);
    },
    remove(id) {
        let url = `/users/${id}`;
        return ClientAPI.get(url);
    },
    edit(user) {
        let url = `/users/${user.id}`;
        return ClientAPI.put(url, user);
    },
}

export default UserAPI