"use client";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center pt-10 gap-4">
      <div className="flex items-center flex-col bg-purple-400/20 border-purple-400/30 border p-24 rounded-lg max-w-xl">
        <img src="./Hero image.png" />
        <h1 className="text-2xl font-extrabold py-3">The Prime Numbers</h1>
        <div className="grid grid-cols-4 gap-4 p-10">
          {/* TODO: Insert the button here */}
        </div>
      </div>
    </main>
  );
}
