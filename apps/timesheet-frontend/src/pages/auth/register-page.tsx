import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Sign up</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 mb-4">
                {/* <FormLabel className="text-left ml-2">Enter your Email</FormLabel> */}
                <FormControl>
                  <Input {...field} placeholder="Enter your Email" />
                </FormControl>
               
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 mb-4">
                {/* <FormLabel className="text-left ml-2">Enter your Password</FormLabel> */}
                <FormControl>
                  <Input type="password" {...field} placeholder="Enter your Password" />
                </FormControl>
               
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
