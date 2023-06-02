import { toast } from "react-hot-toast";
import { request } from "../axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await request.post('/v1/user/login', user)
        toast.loading('Checking Please Wait')
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
        console.log(error)
    }
}