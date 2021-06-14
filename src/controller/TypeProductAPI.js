import { ClientAPI } from "./ClientAPI";

const TypeProductAPI = {
    getAll() {
        let url = `/type`;
        return ClientAPI.get(url)
    },
    add(type){
        let url = `/type`;
        return ClientAPI.post(url, type)
    },
    edit(type){
        let url =`/type/${type.id}`;
        return ClientAPI.put(url, type)
    },
    remove(type){
        let url =`/type/${type.id}`;
        return ClientAPI.delete(url)
    }
}

export default TypeProductAPI