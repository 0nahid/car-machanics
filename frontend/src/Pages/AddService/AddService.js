import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function AddService() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        // fetch('http://localhost:5500/api/services', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        axios.post('http://localhost:5500/api/services', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-75 m-auto">
            <h1>Add service </h1>
            <div className="mt-2">
                <input className="form-control"
                    type="text" required placeholder="Name" {...register("name", {
                        max: 500, min: 1, maxLength: 80
                    })} />
            </div>
            <div className="form-group mt-2">
                <input className="form-control"
                    type="number" required placeholder="Price" {...register("price", { min: 1 })} />
            </div>
            <div className="form-group mt-2">
                <input className="form-control"
                    type="text" required placeholder="Description" {...register("description", {  min: 10 })} />
            </div>
            <div className="form-group mt-2">
                <input className="form-control"
                    type="url" required placeholder="Image Url" {...register("img", { required: true })} />
            </div>
            <input type="submit" className="btn btn-primary mt-2" />
        </form>
    );
}