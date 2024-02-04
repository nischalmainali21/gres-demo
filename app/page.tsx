import Link from "next/link";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/product");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Empty Page
      <Link href="/product" className="text-2xl font-bold">
        Go to Product
      </Link>
    </main>
  );
}
