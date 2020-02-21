import axios from 'axios';

export default {
    getAll: function () {
        return axios.get("/vocab_lists");
    },
    getOne: function (list_id) {
        return axios.get(`/vocab_lists/${list_id}`)
    }
}