import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { randomInt } from "crypto";
import { Separator } from "@/components/ui/separator";
import ProgressSelect from "@/components/ui/progress_select";
import OwnerSelect from "@/components/ui/owner_select";
import PrioritySelect from "@/components/ui/priority_select";
import SizeSelect from "@/components/ui/size_select";
import SignUpForm from "@/components/ui/sign_up_form";
import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-w-max min-h-screen bg-primary text-primary-foreground">
      <div className="w-1/3 p-2">
        <h1 className="text-4xl">Task Management Made Easy</h1>
      </div>
      <Card className="w-1/2 z-10 absolute right-0 top-0 h-full rounded-e-none">
        <CardHeader>
          <CardTitle className="font-mono underline underline-offset-2 mb-2">
            T{randomInt(10000000, 99999999).toString()}
          </CardTitle>
          <Separator />
          <CardTitle className="text-2xl">
            Join for free to start managing
          </CardTitle>
          <Separator />
          <div className="flex flex-row gap-2 pt-2 pb-2">
            <ProgressSelect />
            <OwnerSelect />
            <PrioritySelect />
            <SizeSelect />
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-xl mb-2 font-bold">Create an account</h3>
            <SignUpForm />
          </div>
          <Separator />
          <div className="mt-2 mb-2 flex space-x-4">
            <div>
              <p className="font-bold">Creator</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex space-x-2">
              <Avatar className="max-h-[1.5rem] max-w-[1.5rem]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>John Smith</p>
              <p className="italic">
                {moment().format("MMMM Do YYYY - HH:mm")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
