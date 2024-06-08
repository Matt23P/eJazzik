import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Button, Checkbox, Input } from "rsuite";
import Link from "next/link";
import { LoginComp } from "@/components/authorization/login";

export default function Login() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white w-full items-center justify-center">
      <LoginComp />
    </main>
  );
}
