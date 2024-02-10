export const UPLOAD_IMG_REQUEST = 'UPLOAD_IMG_REQUEST';
export const UPLOAD_IMG_SUCCESS = 'UPLOAD_IMG_SUCCES';
export const UPLOAD_IMG_FAIL = 'UPLOAD_IMG_FAIL';


export const uploadImageRequest = () => ({
    type: UPLOAD_IMG_REQUEST,
})

export const uploadImageSuccess = (imageURL) => ({
    type: UPLOAD_IMG_SUCCESS,
    payload:imageURL,
})

export const uploadImageFail = (error) => ({
    type: UPLOAD_IMG_FAIL,
    payload:error,
})
