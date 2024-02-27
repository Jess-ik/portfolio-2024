import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({ className, ...restProps }: PrismicNextLinkProps) {
	return <PrismicNextLink className={clsx("block w-fit  hover:bg-dark hover:text-light py-3 px-4 border border-dark rounded-full text-mainBlue   transition ease-in-out !duration-700", className)} {...restProps} />;
}
