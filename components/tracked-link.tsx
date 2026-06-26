"use client";

import type { AnalyticsEvent } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean | undefined>;
};

export function TrackedLink({ event, eventParams, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
