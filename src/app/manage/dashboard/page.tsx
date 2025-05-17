import accountApiRequest from "@/apiRequests/account";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value!;
  let name = "";
  try {
    const result = await accountApiRequest.sMe(accessToken);
    console.log("result: ", result);
    name = result.payload.data.name;
  } catch (error: any) {
    console.log(error);
    // phải có throw ở đây thì mới có redirect về logout không nó sẽ nhảy xuống return
    if (error.digest?.includes("NEXT_REDIRECT")) {
      throw error;
    }
  }
  return <div>Dashboard {name}</div>;
}
