import { Fragment } from "react";

const BankCard = ({ nameBank, state }) => {
	return (
		<Fragment className="before:p-0 before:box-border	after:box-border	 before:text before:no-underline after:no-underline before:m-0 after:p-0 after:m-0">
			<div className="w-full grid place-items-start mr-10 -mt-5 h-52">
				<div className="container">
					<div className="card border-gray-50 bg-[url('/img/mesh.webp')]  border-4 border-solid bg-center bg-cover	p-3 relative h-52 rounded-3xl justify-between w-80 flex flex-col">
						<div className="flex justify-between item-center">
							<h2 className="text-base">بانک: {nameBank}</h2>


						</div>
						<div className="flex flex-col gap-4">
							<section className="flex flex-col gap-4">
								<p className="text-xs">شماره شبا</p>
								<div dir="ltr">
									<h1 className="text-xl">{state}</h1>
								</div>
							</section>
							<div className=" w-full flex justify-between item-center">
								<aside className="flex gap-5"></aside>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
						rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px,
						rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;
				}
			`}</style>
		</Fragment>
	);
};

export default BankCard;
