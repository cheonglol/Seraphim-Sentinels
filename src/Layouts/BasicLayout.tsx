import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

interface Props {
  headerContent?: any | undefined;
  mainContent: any;
  footerContent?: any;
}

export const BasicLayout = ({
  headerContent,
  mainContent,
  footerContent
}: Props) => {
  const defaultHeader = <Header />;
  const defaultFooter = <Footer />;

  return (
    <>
      <header className="py-4 bg-slate-200">
        {!headerContent ? defaultHeader : headerContent}
      </header>
      <main className="py-8 bg-slate-50 min-h-screen ">{mainContent}</main>
      <footer className="py-6 min-h-[8vh]">
        {!footerContent ? defaultFooter : footerContent}
      </footer>
    </>
  );
};
