import { useSession } from "next-auth/react";

export default async function Page() {
    const { data: session, status } = useSession()
    console.log(session);
    console.log(status);
    return <p>User Settings</p>
}