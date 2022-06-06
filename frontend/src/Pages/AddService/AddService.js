export default function AddService() {
    return (
        <div className="w-75 m-auto">
            <h1>Add Service here</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="serviceName">Service Name</label>
                    <input required
                        type="text"
                        className="form-control"
                        id="serviceName"
                        placeholder="Enter service name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="serviceDescription">Service Description</label>
                    <input required
                        type="text"
                        className="form-control"
                        id="serviceDescription"
                        placeholder="Enter service description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="servicePrice">Service Price</label>
                    <input required
                        type="text"
                        className="form-control"
                        id="servicePrice"
                        placeholder="Enter service price"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image Url</label>
                    <input required
                        type="url"
                        className="form-control"
                        id="image"
                        placeholder="Enter image url"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
            </form>
        </div>
    );
}
