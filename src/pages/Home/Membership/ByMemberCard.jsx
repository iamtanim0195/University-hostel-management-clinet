import { useParams } from 'react-router-dom';
import { Memberships as MembershipData } from '../../../components/Categories/Membersheep';
import BookingModal from '../../../components/Modal/BookingModal';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth'
const ByMemberCard = () => {
    const { user } = useAuth()
    const { label } = useParams();
    let [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    }
    const filteredMembership = MembershipData.find(membership => membership.label === label);
    const [bookingInfo, setBookingInfo] = useState({
        student:{
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        },
        badge: 'Gold',
        package: filteredMembership?.label,
        price: filteredMembership?.price,
    });

    return (

        <div
            key={filteredMembership.index}
            className="card card-compact w-96 h-48 shadow-xl m-auto"
            style={{ backgroundColor: filteredMembership.bg }}
        >
            <div className="card-body m-auto">
                <h2 className="card-title">{filteredMembership.label}</h2>
                <h2 className="card-title">Price: ${filteredMembership.price}</h2>
                <button onClick={() => setIsOpen(true)} className="btn btn-primary">Purchase</button>
            </div>
            <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo} />
        </div>
    );
}

export default ByMemberCard;
