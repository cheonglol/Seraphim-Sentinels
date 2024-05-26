import React from "react";
import { HeaderNav } from "../../Components/Navigational/HeaderNav";
import { Footer } from "../../Components/Navigational/Footer";
import BottomNavigation from "../../Components/Navigational/BottomNavigation";

interface Props {
  headerContent?: any | undefined;
  mainContent: any;
  footerContent?: any;
}

export const BasicLayout = ({
  headerContent,
  mainContent,
  footerContent,
}: Props) => {
  const defaultHeader = <HeaderNav />;
  const defaultFooter = <Footer />;

  return (
    <>
      <header className="py-4">
        {!headerContent ? defaultHeader : headerContent}
      </header>
      <main className="py-8 px-[4vw] min-h-screen ">{mainContent}</main>
      <footer>{!footerContent ? defaultFooter : footerContent}</footer>
      <BottomNavigation />
    </>
  );
};
