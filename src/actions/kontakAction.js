import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
    console.log('2. masuk action')
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading:true,
                data:false,
                errorMessage:false
            }
        })
        // get API
        axios({
            method:'GET',
            url:'http://localhost:3004/kontaks',
            timeout:120000
        }).then(res => {
            console.log('3. berhasil dapat data: ', res.data)
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        }).catch(err => {
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })


    }
}