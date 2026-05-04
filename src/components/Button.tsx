type ButtonProps = {
    label: string,
    onClick: () => void,
    type?: 'submit' | 'button' | 'reset'
}

export default function Button({label, onClick, type = 'button'}: ButtonProps) {
    return (
        <>
            <button onClick={onClick} type={type}>{label}</button>
        </>
    )
}