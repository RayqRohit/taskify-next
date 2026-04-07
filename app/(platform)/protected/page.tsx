"use client";

import { useAuth, UserButton, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {



    return (
        <div>
            <UserButton
            />
        </div>
    );
};

export default ProtectedPage;