"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { Fragment } from "react";

function Breadcrumbs() {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean); // Remove empty strings

  // Remove 'dashboard' from segments since we treat it as 'Home'
  const filteredSegments = segments.filter(
    (segment) => segment !== "dashboard"
  );

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home breadcrumb always points to /dashboard */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {filteredSegments.length > 0 && <BreadcrumbSeparator />}

          {filteredSegments.map((segment, index) => {
            // Build href starting from /dashboard
            const href = `/dashboard/${filteredSegments
              .slice(0, index + 1)
              .join("/")}`;
            const isLast = index === filteredSegments.length - 1;

            return (
              <Fragment key={segment}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                  )}    
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
