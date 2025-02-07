import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = ({
  pageBreadcrumbTitle,
}: {
  pageBreadcrumbTitle: string;
}) => (
  <Breadcrumb>
    <BreadcrumbList style={{ gap: "1rem" }}>
      <BreadcrumbSeparator className="hidden md:block" />
      <BreadcrumbItem className="hidden md:block">
        <BreadcrumbPage
          className={`hidden md:block font-satoshi text-[#A09B96]`}
        >
          {pageBreadcrumbTitle}
        </BreadcrumbPage>
      </BreadcrumbItem>
      <BreadcrumbItem className="md:hidden block">
        <BreadcrumbPage className="md:hidden font-satoshi font-medium text-base text-gray-900 leading-[23px]">
          VishalMadanCA
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbComponent;
