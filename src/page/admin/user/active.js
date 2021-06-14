import React from 'react'
import { useForm } from 'react-hook-form'

const ActiveUserAdmin = ({ user }) => {

    const { register, handleSubmit } = useForm();

    const onSubmitActiveUser = (code) =>{
        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitActiveUser)}>

            </form>
        </>
    )
}

export default ActiveUserAdmin
