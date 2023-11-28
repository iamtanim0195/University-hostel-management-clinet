
const Membership = () => {
    return (
        <div>
            <p className="text-3xl font-bold w-5  mx-auto">Membership</p>
            <div className="p-5 flex flex-col md:flex-row gap-3">
                <div className="card card-compact w-96 h-48  shadow-xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
                    <div className="card-body m-auto">
                        <h2 className="card-title">Silver</h2>
                        <h2 className="card-title"> Price:$12</h2>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
                <div className="card card-compact w-96 h-48  shadow-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                    <div className="card-body m-auto">
                        <h2 className="card-title">Gold</h2>
                        <h2 className="card-title"> Price:$12</h2>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
                <div className="card card-compact w-96 h-48  shadow-xl bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500">
                    <div className="card-body m-auto">
                        <h2 className="card-title">Platinum</h2>
                        <h2 className="card-title"> Price:$12</h2>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Membership;