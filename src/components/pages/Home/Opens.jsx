import open from "@/assets/open.png"

const openingHours = [
	{day: "Monday", hours: "11:00 AM - 10:00 PM"},
	{day: "Tuesday", hours: "11:00 AM - 10:00 PM"},
	{day: "Wednesday", hours: "11:00 AM - 10:00 PM"},
	{day: "Thursday", hours: "11:00 AM - 10:00 PM"},
	{day: "Friday", hours: "11:00 AM - 11:00 PM"},
	{day: "Saturday", hours: "12:00 PM - 11:00 PM"},
	{day: "Sunday", hours: "Closed"},
];

const Opens = () => {
	return (
		<section className="
		bg-lemonGreen text-white
		lg:flex lg:flex-row lg:justify-center
		lg:items-center lg:gap-12 lg:p-12
		">
			<img
				src={open}
				alt=""
				className=
					"w-full h-40 object-cover lg:w-lg lg:h-80 lg:rounded-lg lg:shadow-xl"
			/>
			<div className="flex flex-col items-center lg:w-120">
				<h2 className="text-4xl font-bold py-12">
					Opening Hours
				</h2 >
				<ul className="w-full px-8 pb-12">
					{openingHours.map((item, index) => (
						<li
							key={index}
							className=""
						>
							<span className="">
								{item.day}
							</span >
							<span className="float-right">
								{item.hours}
							</span >
						</li >
					))}
				</ul >
			</div >
		</section >
	)
}

export default Opens;
