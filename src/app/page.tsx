import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home"); // Перенаправлення на головну сторінку
  return null; // Повертаємо null, оскільки редирект вже стався
}
