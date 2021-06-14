import { ClientAPI } from './ClientAPI'

const PropertiesAPI = {
    getAllSize() {
        let url = `/size`
        return ClientAPI.get(url)
    },
    editSize(size) {
        let url = `/size/${size.id}`
        return ClientAPI.put(url, size)
    },
    addSize(size) {
        let url = `/size`
        return ClientAPI.post(url, size)
    },
    getAllColor() {
        let url = `/color`
        return ClientAPI.get(url)
    },
    editColor(color) {
        let url = `/color/${color.id}`
        return ClientAPI.put(url, color)
    },
    addColor(color) {
        let url = `/color`
        return ClientAPI.post(url, color)
    }
}

export default PropertiesAPI