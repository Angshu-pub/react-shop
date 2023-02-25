import axios from 'axios';
import { setItems } from '../store/dataSlice';

class DataService {

  getShoesList(count) {
    let url = 'https://codingapple1.github.io/shop/data2.json';
    if(count.payload > 0) {
      url = 'https://codingapple1.github.io/shop/data3.json';
    }
    try {
      return async (dispatch) => {
        const response = await axios.get(url)
        dispatch(setItems(response.data));
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new DataService();
