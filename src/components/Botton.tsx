import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
	to: string;
	message: string;
}

export default function Button(props: ButtonProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const buttonStyle =
		location.pathname === props.to
			? "bg-primary text-white font-bold"
			: "bg-secondary";

	function handleClick() {
		navigate(props.to);
	}

	return (
		<button
			className={`${buttonStyle} mx-6 py-2 px-4 rounded-full cursor-pointer`}
			onClick={handleClick}
		>
			{props.message}
		</button>
	);
}