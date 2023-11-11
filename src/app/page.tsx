import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[380px] min-h-[100%] px-[24px] overflow-scroll py-[30px] my-2 rounded-tr-[15px] rounded-bl-[15px] bg-white">
      <div className="flex item-center  ">
        <div className="cursor-pointer">
          <ChevronLeft strokeWidth={"2.5px"} />
        </div>
        <h4 className="flex-1 text-center text-black text-[15px] font-[700] leading-normal">
          UPCOMING APPOINMENTS
        </h4>
      </div>

      <div className="px-4 py-5 blue-linear-gradient flex justify-between gap-x-3 items-center mt-[39px] rounded-[9px]">
        <h4 className="text-[15px] text-white font-[700] leading-normal">
          New Booking In 2 Minutes
        </h4>
        <Button variant="secondary">Book Now</Button>
      </div>

      <div className="rounded-[9px] mt-[13px] py-[21px] px-2 bg-[#F6F6F6]">
        <div className="flex justify-between gap-x-[6px]">
          <Button variant={"secondary"}>clinic</Button>
          <Button variant={"outline"}>Test</Button>
          <Button variant={"outline"}>Surgery</Button>
          <Button variant={"outline"}>Medicine</Button>
        </div>
        <div className="py-[32px] flex items-center gap-x-[18px]">
          <div className="w-[84px] h-[84px] rounded-full border-2 border-orange-500 border-opacity-40">
            <Image
              src="/profile.png"
              height={75.52}
              width={75.52}
              className="w-[75.52px] h-[75.52px] rounded-full"
              alt="profile"
            />
          </div>

          <div>
            <h4 className=" text-black text-sm font-normal  capitalize">
              17 september 2021, 9.30 PM
            </h4>
            <h4 className=" text-amber-600 text-sm font-normal  capitalize">
              appointment with doctor arun
            </h4>
            <h4 className="text-black text-sm font-normal  capitalize">
              doctor world clinic
            </h4>
          </div>
        </div>
        <div className="flex justify-between gap-x-[12px]">
          <Button variant={"destructive"}>RESCHEDULE</Button>
          <Button variant={"destructive"} className="flex-1">
            CANCEL
          </Button>
          <Button variant={"ghost"} className="uppercase">
            <span className="mr-2">
              <Eye className="text-black font-bold w-[15px] h-[15px]" />
            </span>
            VIEW
          </Button>
        </div>
      </div>

      <div className="rounded-[9px] mt-[13px] mb-[20px] py-[21px] px-2 bg-[#F6F6F6]">
        <div className="flex justify-between gap-x-[6px]">
          <Button variant={"secondary"}>clinic</Button>
          <Button variant={"outline"}>Test</Button>
          <Button variant={"outline"}>Surgery</Button>
          <Button variant={"outline"}>Medicine</Button>
        </div>
        <div className="py-[32px] flex items-center gap-x-[18px]">
          <div className="w-[84px] h-[84px] rounded-full border-2 border-orange-500 border-opacity-40">
            <Image
              src="/profile.png"
              height={75.52}
              width={75.52}
              className="w-[75.52px] h-[75.52px] rounded-full"
              alt="profile"
            />
          </div>

          <div>
            <h4 className=" text-black text-sm font-normal  capitalize">
              17 september 2021, 9.30 PM
            </h4>
            <h4 className=" text-amber-600 text-sm font-normal  capitalize">
              appointment with doctor arun
            </h4>
            <h4 className="text-black text-sm font-normal  capitalize">
              doctor world clinic
            </h4>

            <h4 className="text-black text-sm font-normal  capitalize">
              test : X-ray test
            </h4>
          </div>
        </div>
        <div className="flex justify-between gap-x-[12px]">
          <Button variant={"destructive"}>RESCHEDULE</Button>
          <Button variant={"destructive"} className="flex-1">
            CANCEL
          </Button>
          <Button variant={"ghost"} className="uppercase">
            <span className="mr-2">
              <Eye className="text-black font-bold w-[15px] h-[15px]" />
            </span>
            VIEW
          </Button>
        </div>
      </div>

      <Button variant={"outline"} className="w-full  h-[46.67px]">
        BACK
      </Button>
    </main>
  );
}
