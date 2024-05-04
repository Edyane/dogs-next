type InputProps = {
    label: string;
}
export default function Input({ label }: InputProps) {
    return (
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
    );
}