import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Tab = () => {
  const content = [
    "Python Developer",
    "Data Scientist",
    "Shopify Developer",
    "Shopify Developer",
    "Front End Developer",
    "Python Developer",
    "MERN Stack Developer",
    "Shopify Developer",
    "Full Stack Developer",
    "Full Stack Developer",
    "Python Developer",
  ];
  return (
    <div className="mx-4">
      <Tabs
        defaultValue="itanddevelopment"
        className="mt-[30px] flex flex-col items-center justify-center bg-muted max-w-[920px] px-[60px] pb-[30px] mx-4 rounded-lg overflow-hidden">
        <TabsList className="flex items-center justify-center text-sm md:text-[1rem]  h-11 mt-[15px] bg-bgcgray w-fit p-0 overflow-hidden">
          <TabsTrigger
            value="itanddevelopment"
            className="h-full text-center text-black font-normal rounded-lg px-[1.8rem] py-[10px] data-[state=active]:bg-lemon data-[state=active]:font-semibold">
            IT & Development
          </TabsTrigger>
          <TabsTrigger
            value="designandcreative"
            className="h-full text-center text-black font-normal rounded-lg px-[1.8rem] py-[10px] data-[state=active]:bg-lemon data-[state=active]:font-semibold">
            Design and Creative
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="itanddevelopment"
          className="flex flex-col items-center mt-6 md:grid  md:grid-cols-3 md:gap-x-[130px] rounded-lg gap-y-[18px]">
          {content.map((item, id) => (
            <p key={id} className={cn("text-muted-foreground",{
              "font-semibold text-black":item === "MERN Stack Developer"
            })}>
              <a href="">{item}</a>
            </p>
          ))}
          <p className="font-semibold">
            <a href="#">Explore More</a>
          </p>
        </TabsContent>
        <TabsContent value="designandcreative"></TabsContent>
        <div></div>
      </Tabs>
    </div>
  );
};

export default Tab;
