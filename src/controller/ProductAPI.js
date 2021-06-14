import { ClientAPI } from "./ClientAPI";

const ProductAPI = {
    getAll() {
        let url = `/product`;
        return ClientAPI.get(url);
    },
    getById(id) {
        let url = `/product/${id}`;
        return ClientAPI.get(url);
    },
    search(value) {
        let url = `/product?_p=${value}`;
        return ClientAPI.get(url);
    },
    sortPrice(type) {
        let url = `/product?_sort=price&_order=${type}`;
        return ClientAPI.get(url);
    },
    sortName(type) {
        let url = `/product?_sort=name&_order=${type}`;
        return ClientAPI.get(url);
    },
    remove(id) {
        let url = `/product/${id}`;
        return ClientAPI.delete(url);
    },
    edit(product) {
        let url = `/product/${product.id}`;
        return ClientAPI.put(url, product)
    },
    add(product) {
        let url = `/product`;
        return ClientAPI.post(url, product)
    }
}

export default ProductAPI