import Link from "next/link";
import React from "react";
import { ChatSvg } from "@icon/chat_svg";
import { GitSvg } from "@icon/git_svg";

const HeaderRight = () => {
	return (
		<div className="flex items-center space-x-4">
			<Link href={"/"}>Blog</Link>
			<Link href={"/"}>Project</Link>
			<Link href={"/"}>
				<ChatSvg />
			</Link>
			<Link href={"/"}>
				<GitSvg />
			</Link>
		</div>
	);
};

export default HeaderRight;
