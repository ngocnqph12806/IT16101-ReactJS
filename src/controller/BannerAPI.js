import { ClientAPI } from "./ClientAPI";

const BannerAPI = {
    getAll(){
        let url = `/banner`;
        return ClientAPI.get(url);
    }
}

export default BannerAPI