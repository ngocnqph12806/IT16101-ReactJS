import { ClientAPI } from "./ClientAPI"

export const BillAPI = {
    getAll() {
        let url = `/bill`
        return ClientAPI.get(url)
    },
    getByIdUser(id) {
        let url = `/bill?idUser=${id}`
        return ClientAPI.get(url)
    },
    getById(id) {
        let url = `/bill/${id}`
        return ClientAPI.get(url)
    },
    save(bill) {
        let url = `/bill`
        return ClientAPI.post(url, bill)
    },
    edit(bill) {
        let url = `/bill/${bill.id}`
        return ClientAPI.put(url, bill)
    },
    getVoucher(id) {
        let url = `/voucher/${id}`
        return ClientAPI.get(url);
    },
    addVoucher(voucher) {
        let url = `/voucher`
        return ClientAPI.post(url, voucher)
    }
}

export const saveBrowser = (listCart) => {
    localStorage.setItem('listCart', JSON.stringify(listCart));
}
export const readBrowser = () => {
    return JSON.parse(localStorage.getItem('listCart'));
}
export const removeBrowser = () => {
    return localStorage.removeItem('listCart');
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
});

export const openAlert = (text) => {
    document.querySelector('#alertBox span').innerHTML = text
    document.getElementById('alertBox').style.display = 'unset'
    setTimeout(closeAlert, 2000)
}

const closeAlert = () => {
    document.getElementById('alertBox').style.display = 'none'
}

export const openAlertVoucher = (text) => {
    document.querySelector('#alertBox span').innerHTML = text
    document.getElementById('alertBox').style.display = 'unset'
    setTimeout(closeAlert, 10000)
}