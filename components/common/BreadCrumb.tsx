import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface BreadcrumbWithCustomSeparator {
  itemsList: { title: string; href: string }[];
}
export function BreadcrumbCustom({ itemsList }: BreadcrumbWithCustomSeparator) {
  return (
    <>
      <Breadcrumb className="list-none flex items-center gap-2 mt-4">
        <BreadcrumbList>
          {itemsList.map((event) => {
            return (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={event.href}>
                    {event.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {itemsList.length > 1 ? <BreadcrumbSeparator /> : null}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
