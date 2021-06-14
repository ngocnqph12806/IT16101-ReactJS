import { ClientAPI } from "./ClientAPI";

const BrandProductAPI = {
    getAll() {
        let url = '/brand';
        return ClientAPI.get(url)
    },
    add(brand) {
        let url = `/brand`;
        return ClientAPI.post(url, brand)
    },
    edit(brand) {
        let url = `/brand/${brand.id}`;
        return ClientAPI.put(url, brand)
    },
    remove(brand) {
        let url = `/brand/${brand.id}`;
        return ClientAPI.delete(url)
    }
}

export default BrandProductAPI