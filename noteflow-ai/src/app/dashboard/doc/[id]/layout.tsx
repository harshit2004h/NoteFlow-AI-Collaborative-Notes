import React from "react";
import { auth } from "@clerk/nextjs/server";
import RoomProvider from "@/components/RoomProvider";

async function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  auth.protect();
  const { id } = await params;
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
