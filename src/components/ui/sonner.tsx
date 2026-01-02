"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

import { useTheme } from "next-themes";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={"light"}
            className='toaster group'
            toastOptions={{
                classNames: {
                    toast: "group/toast bg-secondary text-gray-900 border-gray-200 shadow-lg rounded-none border",
                    description: "text-sm text-gray-600",
                    actionButton:
                        "bg-black text-white hover:bg-gray-800 rounded-none px-4 py-2",
                    cancelButton:
                        "bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-none",
                    closeButton: "text-gray-400 hover:text-gray-600",
                    success: "bg-red-400 text-white",
                },
                style: {
                    borderRadius: "0",
                    borderWidth: "1px",
                },
            }}
            position='top-right'
            duration={4000}
            closeButton
            visibleToasts={3}
            {...props}
        />
    );
};

export { Toaster };
