import Button from "@/components/ui/Button";


export default async function HomePage() {

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <Button name="Test Button" variant="normal"/>
      <Button name="Ghost Test Button" variant="ghost" />
    </main>
  );
}