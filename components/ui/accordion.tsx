import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

/** `unstyled` skips the shadcn look so only the passed `className` (the site's own CSS) applies. */
type Unstyled = { unstyled?: boolean };

function Accordion({
  className,
  unstyled = false,
  ...props
}: AccordionPrimitive.Root.Props & Unstyled) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={unstyled ? className : cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  unstyled = false,
  ...props
}: AccordionPrimitive.Item.Props & Unstyled) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={unstyled ? className : cn("not-last:border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  unstyled = false,
  ...props
}: AccordionPrimitive.Trigger.Props & Unstyled) {
  if (unstyled) {
    return (
      <AccordionPrimitive.Header render={<div className="contents" />}>
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={className}
          {...props}
        >
          {children}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  unstyled = false,
  ...props
}: AccordionPrimitive.Panel.Props & Unstyled) {
  if (unstyled) {
    return (
      <AccordionPrimitive.Panel
        data-slot="accordion-content"
        keepMounted
        className={className}
        {...props}
      >
        {children}
      </AccordionPrimitive.Panel>
    );
  }
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
