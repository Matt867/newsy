import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { randomInt } from "crypto";
import { Separator } from "@/components/ui/separator";
import ProgressSelect from "@/components/ui/progress_select";
import OwnerSelect from "@/components/ui/owner_select";
import PrioritySelect from "@/components/ui/priority_select";
import SizeSelect from "@/components/ui/size_select";

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
      <Card className="w-2/3 z-10 absolute right-0 top-0 h-full rounded-e-none">
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
            <h3 className="text-xl">
              <strong>Step 1:</strong> Create an account
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
