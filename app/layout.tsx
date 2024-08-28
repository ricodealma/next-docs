import ReactQueryProvider from "@/infrastructure/libs/reactQuery";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div>Oi Next</div>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
