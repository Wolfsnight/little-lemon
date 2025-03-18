import map from "@/assets/map.png"

const Location = () => {
	return (
		<section className="p-8">
			<h2
				className="text-4xl text-center pb-12 font-bold"
			>
				Our Location
			</h2>
			<div className=
				     "flex flex-row justify-between items-center gap-4
				     lg:flex-col-reverse lg:gap-12">
				<address className="w-40 lg:w-full lg:text-xl lg:text-center">
					<p className="font-bold pb-2">
						Little Lemon
					</p >
					<p >
						Main Street 123
					</p >
					<p >
						Capital City
					</p >
				</address >
				<img
					src={map}
					alt=""
					className=
						"w-40 h-30 object-cover object-center overflow-hidden
						lg:w-240 lg:h-120"
				/>
			</div>

		</section>
	)
}

export default Location
