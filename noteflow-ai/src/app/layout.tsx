import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "NoteFlow - AI-Powered Note Workspace",
  description:
    "Noteflow is an AI-enhanced Notion alternative that helps you write, organize, and collaborate faster. Smart notes, docs, tasks, and powerful AI built into one seamless workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
