import React from "react";
import { trpc } from "../../utils/trpc";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthShowcase: React.FC = () => {
	const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

	const { data: sessionData } = useSession();

	return (
		<div className="flex items-center gap-4 ">
			{sessionData && (
				<p className="text-l text-blue-500 text-white my-4">
					Hey, {sessionData?.user?.name}
				</p>
			)}
			<button
				className="rounded-md border border-black bg-primary-a10 text-white px-3 py-1.5 text-m shadow-lg hover:bg-violet-100 "
				onClick={sessionData ? () => signOut() : () => signIn()}
			>
				{sessionData ? "Sign out" : "Sign in"}
			</button>
		</div>
	);
};

const Navbar=()=>{
	return (<header className="bg-primary-a75 w-1/1 items-center flex justify-between px-6">
		<div className="text-xl text-white">Navbar</div>
		<AuthShowcase/>
	</header>);
};

export default Navbar;