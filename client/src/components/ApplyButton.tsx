import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/const";
import { ComponentProps } from "react";

/**
 * Primary call-to-action button that navigates to the affiliate apply link.
 * Renders as an anchor (via Button's asChild) so the full tracking URL —
 * including the affiliate id — is carried through on click.
 */
export default function ApplyButton({
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <a href={APPLY_URL} data-testid="apply-cta">
        {children}
      </a>
    </Button>
  );
}
