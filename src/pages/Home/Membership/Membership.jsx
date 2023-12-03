import { Link } from 'react-router-dom';
import { Memberships } from '../../../components/Categories/Membersheep';


const Membership = () => {

    return (
        <div>
            <p className="text-3xl font-bold w-5  mx-auto">Membership</p>
            <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
                {Memberships.map((Membership, index) => (
                    <div
                        key={index}
                        className="card card-compact w-96 h-48 shadow-xl"
                        style={{ backgroundColor: Membership.bg }}
                    >
                        <div className="card-body m-auto">
                            <h2 className="card-title">{Membership.label}</h2>
                            <h2 className="card-title">Price: ${Membership.price}</h2>
                            <Link to={`/checkout/${Membership.label}`}>
                                <button className="btn btn-primary">Purchase</button>
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Membership;