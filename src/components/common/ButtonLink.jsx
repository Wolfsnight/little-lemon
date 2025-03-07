const ButtonLink = ({label, href}) => {
	return (
		<a
			href={href}
		>
      <button className="bg-lemonYellow active:bg-lemonGreen active:text-white rounded-full py-1 px-6 lg:text-xl">
	      {label}
			</button >
    </a >
	);
}

export default ButtonLink;

// VORLAGE:
// <ButtonLink label="Reserve a Table" href="https://google.com" />
