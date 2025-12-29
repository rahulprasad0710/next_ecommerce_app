"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
    email: string;
    password: string;
    remember: boolean;
}

export default function LoginFormComponent() {
    const form = useForm<LoginFormInputs>();
    const callBackUrlGoogle = "http://localhost:3000/api/auth/callback/google";
    // const callBackUrlEmail = "https://veloraescape.publicvm.com";
    const callBackUrlEmail = "http://localhost:3000";

    const onSubmit = async (payload: LoginFormInputs) => {
        try {
            const { data, error } = await authClient.signIn.email({
                email: payload.email,
                password: payload.password,
                rememberMe: payload.remember,
                callbackURL: "http://localhost:3000/api/auth/callback/google",
                // associatedInternalCompanyId: 1,
                // isAccountByAdmin: false,
            });

            if (error) {
                toast.error(
                    error?.message ? error?.message : "Login failed. Try again."
                );
                return;
            }
            if (data) {
                toast.success("Login successful!");
                window.location.href = data.url || "/";
            }
        } catch (err: unknown) {
            console.log("LOG: ~ onSubmit ~ err:", err);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "google",
                scopes: ["profile", "email"],
            });
            if (data?.error) {
                toast.error(
                    data.error?.message || "Google sign-in failed. Try again."
                );
            }

            if (data?.data?.url) {
                toast.success("Login successful!");
                window.location.href = data?.data?.url || "/";
            }
        } catch (error) {
            console.log("LOG: ~ handleGoogleSignIn ~ error:", error);
            toast.error("Google sign-in failed. Try again.");
        }
    };

    return (
        <div className='min-h-screen bg-secondary flex md:items-center justify-center px-4 py-12'>
            <div className='max-w-md w-full bg-white rounded-xs shadow-md p-8'>
                <div className='w-full text-center mb-6'>
                    <div className='flex justify-center'>
                        <Link className=' mb-4' href='/'>
                            <Image
                                src='/images/logo_dark.svg'
                                alt='Logo'
                                width={128}
                                height={40}
                            />
                        </Link>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900'>
                            Login
                        </h1>
                        <p className='text-sm text-gray-500'>
                            Sign in to your account to continue
                        </p>
                    </div>
                </div>

                <div className='mt-2 '>
                    <button
                        className='
                        mt-2
                        w-full
                        cursor-pointer
                        flex
                        items-center
                        justify-center
                        gap-3
                        py-2
                        px-4
                        border
                        border-secondary
                        rounded-lg
                        hover:bg-gray-100
                        transition
                        duration-200
                        text-gray-800
                        font-medium '
                        onClick={handleGoogleSignIn}
                    >
                        <Image
                            src='/images/google.png'
                            alt='Google Logo'
                            width={24}
                            height={24}
                        />
                        Sign in with Google
                    </button>
                </div>
                <div className='mt-6'>
                    <p className='text-sm text-gray-500'>Or continue with</p>
                    <Form {...form}>
                        <form
                            className='space-y-4'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='you@company.com'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                placeholder='Enter your password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='remember'
                                render={({ field }) => (
                                    <FormItem className='flex flex-row items-center space-x-2 space-y-0'>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                        </FormControl>
                                        <FormLabel>Remember me</FormLabel>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type='submit'
                                variant={"default"}
                                className='w-full py-4!'
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting
                                    ? "Signing in..."
                                    : "Sign in"}
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className='mt-6 text-center flex items-center gap-2'>
                    <p className='text-sm text-gray-500'>
                        Do not have an account?
                    </p>
                    <Link
                        href='/auth/register'
                        className='text-sm text-primary underline'
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
