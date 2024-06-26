import type {Metadata} from "next";

import api from "~/store/api";
import CartProvider from "~/cart/context";
import ThemeProvider from "~/theme/context";
// import ThemeToggle from "~/theme/components/ThemeToggle";

import InstagramIcon from "@/components/icons/instagram";
import WhatsappIcon from "@/components/icons/whatsapp";
import FacebookIcon from "@/components/icons/facebook";
import TiktokIcon from "@/components/icons/tiktok";
import YoutubeIcon from "@/components/icons/youtube";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const store = await api.fetch();

  return {
    title: store.title,
    description: store.subtitle,
  };
}

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  const store = await api.fetch();

  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="m-auto max-w-screen-xl">
            <header className="flex flex-col gap-4 pb-3">
              <img
                alt={store.title}
                className="h-32 object-cover sm:h-64"
                src={store.banner}
              />
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                <div className="-mt-20 rounded-full p-1 sm:-mt-12">
                  <img
                    alt={store.title}
                    className="h-32 w-32 min-w-[128px] rounded-full border-8 border-background"
                    src={store.logo}
                  />
                </div>
                <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:gap-2 sm:text-left">
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold sm:text-4xl">{store.title}</p>
                    <p className="font-medium text-muted-foreground">{store.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {store.instagram ? (
                      <a
                        aria-label="Instagram"
                        href={store.instagram}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <InstagramIcon />
                        </div>
                      </a>
                    ) : null}
                    {store.whatsapp ? (
                      <a
                        aria-label="Whatsapp"
                        href={store.whatsapp}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <WhatsappIcon />
                        </div>
                      </a>
                    ) : null}
                    {store.facebook ? (
                      <a
                        aria-label="Facebook"
                        href={store.facebook}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <FacebookIcon />
                        </div>
                      </a>
                    ) : null}
                    {store.tiktok ? (
                      <a
                        aria-label="Tiktok"
                        href={store.tiktok}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <TiktokIcon />
                        </div>
                      </a>
                    ) : null}
                    {store.youtube ? (
                      <a
                        aria-label="Youtube"
                        href={store.youtube}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <YoutubeIcon />
                        </div>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </header>
            <main className="px-0">
              <CartProvider>{children}</CartProvider>
            </main>
            <footer className="px-4  text-center">
              {/* Inicio de copyright - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
              <div className="inline-flex flex-center mb-8 mt-2 justify-center items-center">  
                <div>
                  Sition creado con
                </div>
                <a href="https://ferreteros.app" className="ml-2">
                  <img alt="Ferreteros.app" src={"/assets/ferreteros-app-black.png"} className="h-6 mb-1"/>
                </a>
              </div>
              {/* Fin de copyright */}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
