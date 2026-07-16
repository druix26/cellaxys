import NextLink from "next/link";
import type { ComponentProps } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const resolvedHref =
    basePath && typeof href === "string" && href.startsWith("/")
      ? `${basePath}${href}`
      : href;

  return <NextLink href={resolvedHref} {...props} />;
}
