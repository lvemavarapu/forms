import react from 'react';
import { useForm } from 'react-hook-form';

function PersonalDetails(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    }
    return(
        <div>
            <h3> Personal Details</h3>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <input {...register('firstName')} />
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
        </div>
    )
}
export default PersonalDetails;