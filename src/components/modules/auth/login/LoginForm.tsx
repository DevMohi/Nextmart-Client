"use client";
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res.message);
        form.reset();
      } else {
        toast.error(res.message);
      }
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <Logo />
      <div className="mb-3">
        <div className="flex items-center space-x-4 mb-2 ">
          <h1>Login</h1>
          <p className="font-medium text-sm text-gray-500">Welcome Back!</p>
        </div>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-3">
            {isSubmitting ? "Logging..." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Do not have an account?
        <Link href="/register" className="text-primary ml-1">
          Login
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
