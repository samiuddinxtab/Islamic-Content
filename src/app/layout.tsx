import { getDirection } from './i18n';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // Our updated getDirection function now safely handles undefined/null/invalid languages
  const dir = getDirection(params.lang);
  
  return (
    <html lang={params.lang} dir={dir}>
      <body>{children}</body>
    </html>
  );
}