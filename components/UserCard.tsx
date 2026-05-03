type UserCardProps = {
    name: string;
    age?: number;
    isOnline?: boolean;
}

export default function UserCard({name, age, isOnline}: UserCardProps) {

    return (
        <>
            <p>{name}</p>
            <p>{age !== undefined ? age : 'Age is not specified' }</p>
            <p>{isOnline ? 'Online' : 'Offline'}</p>
        </>
    )
}