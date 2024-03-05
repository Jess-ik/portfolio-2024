import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({ className, ...restProps }: PrismicNextLinkProps) {
	return <PrismicNextLink className={clsx("block w-fit font-light tracking-wide  hover:bg-blue hover:text-light py-3 px-4 border border-dark hover:border-blue rounded-full text-mainBlue   transition ease-in-out !duration-500", className)} {...restProps} />;
}
