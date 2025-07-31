import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kayi Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("DOMContentLoaded", function () {
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://static.landbot.io/landbot-widget/landbot-widget.min.js";
                s.onload = function () {
                  new Landbot.Livechat({
                    configUrl: "https://landbot.online/v3/H-3074586-M13ISOMDG5UFG08S/index.json"
                  });
                };
                document.body.appendChild(s);
              });
            `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
