import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    const listings = await getListings({ userId: currentUser?.id });

    if (!currentUser) {
        return (
            <EmptyState 
                title="Unauthorized" 
                subtitle="Please login"
            />
        );
    }

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No Properties founds"
                subtitle="Looks like you have no properties."
            />
        );
    }

    return (
        <PropertiesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default PropertiesPage;
