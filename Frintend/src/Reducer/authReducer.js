const User = JSON.stringify(localStorage.getItem('data'))

const initialState = User ? {
    register:true,
    User
}: {
    register:false,
    User:null 
}


const authReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':


            return {
                ...state,
                register:true,
                User:action.payload

            }

            case 'LOGIN_FALSE':
            case 'REGISTER_FALSE':


            return {
                ...state,
                register:true,
                User:action.payload

            }

            default : return state

    }

}
export default authReducer