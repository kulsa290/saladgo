import './globals.css';

export const metadata = {
  title: 'SaladGo - Fresh Salads & Vegetables Delivery',
  description: 'Fresh salads, vegetables, sprouts, and healthy products delivered fast to your doorstep.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
