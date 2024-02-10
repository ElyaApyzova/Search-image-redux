import { UPLOAD_IMG_FAIL, UPLOAD_IMG_REQUEST, UPLOAD_IMG_SUCCESS } from "../action/imgAction"




const initialState = {
    loading:false,
    imageURL:'',
    error:null,
}


const imageReducer = (state = initialState, action)=> {
    switch (action.type) {
        case UPLOAD_IMG_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };

            case UPLOAD_IMG_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    imageURL:action.payload,
                };

                case UPLOAD_IMG_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    };
                    default:
                        return state;
    }
}

export default imageReducer;