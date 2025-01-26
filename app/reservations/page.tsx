import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationClient from "./ReservationClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();
    const reservations = await getReservations({
        authorId: currentUser?.id
    });

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please login"
            />
        );
    }

    if (reservations.length === 0) {
        return (
            <EmptyState 
                title="No reservations found"
                subtitle="Looks like your have no reservations on your properties"
            />
        );
    }

    return (
    <div>
        <ReservationClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    </div>
    )
    }

export default ReservationsPage;
