import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kayi Digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Landbot Integration - Using the correct script and method */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://static.landbot.io/landbot-3/landbot-3.0.0.js';
                
                script.onload = function() {
                  try {
                    console.log('✅ Landbot script loaded successfully');
                    var myLandbot = new Landbot.Livechat({
                      configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3074586-M13ISOMDG5UFG08S/index.json',
                    });
                    console.log('✅ Landbot initialized successfully');
                  } catch (error) {
                    console.error('❌ Error initializing Landbot:', error);
                  }
                };
                
                script.onerror = function() {
                  console.error('❌ Failed to load Landbot script');
                  // Fallback: try alternative method
                  setTimeout(function() {
                    try {
                      var fallbackScript = document.createElement('script');
                      fallbackScript.src = 'https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js';
                      fallbackScript.onload = function() {
                        console.log('✅ Fallback Landbot script loaded');
                        if (typeof Landbot !== 'undefined') {
                          new Landbot.Livechat({
                            configUrl: 'https://landbot.online/v3/H-3074586-M13ISOMDG5UFG08S/index.json'
                          });
                        }
                      };
                      document.head.appendChild(fallbackScript);
                    } catch (e) {
                      console.error('❌ Fallback also failed:', e);
                    }
                  }, 2000);
                };
                
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
