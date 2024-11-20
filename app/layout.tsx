import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* by adding inter font to the body element, the font will be applied throughout your application
      You're also adding the Tailwind antialiased class which smooths out the font. */}
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
