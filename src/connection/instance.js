import axios from "axios";
import Qs from "qs";

const instance = axios.create({
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "brackets" })
})

export default instance;
