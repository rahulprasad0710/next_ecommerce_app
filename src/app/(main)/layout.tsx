import React, { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative'>
            <Header />
            <div className='mt-12'>{children}</div>
            <Toaster />
            <Footer />
        </main>
    );
};

export default Layout;
